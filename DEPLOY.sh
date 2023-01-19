
# To deploy wsproxy behind nginx (for TLS) on a host ws.example.com
# running Ubuntu 22.04 (and Postgres locally), you'd do something like
# the following:

sudo su  # we do the rest as root

apt install golang nginx certbot python3-certbot-nginx

echo '127.0.0.1 ws.example.com' >> /etc/hosts

echo '                                                                          
server {
  listen 80;
  listen [::]:80;
  server_name ws.example.com;
  location / {
    proxy_pass http://127.0.0.1:6543/;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
  }
}
' > /etc/nginx/sites-available/wsproxy   

ln -s /etc/nginx/sites-available/wsproxy /etc/nginx/sites-enabled/wsproxy

certbot --nginx -d ws.example.com

echo '
server {
  server_name ws.example.com;

  location / {
    proxy_pass http://127.0.0.1:6543/;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
  }

  listen [::]:80 ipv6only=on;
  listen 80;

  listen [::]:443 ssl ipv6only=on; # managed by Certbot
  listen 443 ssl; # managed by Certbot
  ssl_certificate /etc/letsencrypt/live/ws.example.com/fullchain.pem; # managed by Certbot
  ssl_certificate_key /etc/letsencrypt/live/ws.example.com/privkey.pem; # managed by Certbot
  include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
' > /etc/nginx/sites-available/wsproxy

service nginx restart

adduser wsproxy --disabled-login

sudo su wsproxy
git clone https://github.com/neondatabase/wsproxy.git
cd wsproxy
go build
exit

echo '
[Unit]
Description=wsproxy

[Service]
Type=simple
Restart=always
RestartSec=5s
User=wsproxy
Environment=LISTEN_PORT=:6543 ALLOW_ADDR_REGEX='^ws.example.com:5432$'
ExecStart=/home/wsproxy/wsproxy/wsproxy

[Install]
WantedBy=multi-user.target
' > /lib/systemd/system/wsproxy.service

systemctl enable wsproxy
service wsproxy start

