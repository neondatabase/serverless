/**
 * Detects if the code is running in a browser environment and displays a warning
 * about the security implications of running SQL directly from the browser.
 */
export function warnIfBrowser(): void {
  const isBrowser =
    typeof window !== 'undefined' && typeof document !== 'undefined';
  if (
    isBrowser &&
    typeof console !== 'undefined' &&
    typeof console.warn === 'function'
  ) {
    console.warn(`          
        ************************************************************
        *                                                          *
        *  WARNING: Running SQL directly from the browser can have *
        *  security implications. Even if your database is         *
        *  protected by Row-Level Security (RLS), use it at your   *
        *  own risk. This approach is great for fast prototyping,  *
        *  but ensure proper safeguards are in place to prevent    *
        *  misuse or execution of expensive SQL queries by your    *
        *  end users.                                              *
        *                                                          *
        *  If you've assessed the risks, suppress this message     *
        *  using the disableWarningInBrowsers configuration        *
        *  parameter.                                              *
        *                                                          *
        ************************************************************`);
  }
}
