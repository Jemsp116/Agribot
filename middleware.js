// middleware.js
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired();

export const config = {
  matcher: ['/about-us' ,'/home', '/RentRobot', '/settingtab', '/api/message', '/api/robots', '/api/payment-db', '/api/verify', '/api/register', '/api/upload'],
};