import { NextRequest, NextResponse } from 'next/server';

const locales = ['fa', 'en'];
const defaultLocale = 'fa';

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || '';
  if (acceptLanguage.includes('en')) return 'en';
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*|favicon.ico|api|admin|images|Header|pattern|fonts|heroSection|about|projects|services|robots.txt).*)'],
};
