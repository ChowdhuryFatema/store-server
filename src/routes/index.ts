import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  // {
  //   path: '/admins',
  //   route: AdminRoutes,
  // },
  // {
  //   path: '/auth',
  //   route: AuthRoute,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
