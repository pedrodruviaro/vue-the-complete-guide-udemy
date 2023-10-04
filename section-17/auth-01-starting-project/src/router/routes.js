import CoachDetail from '../pages/coaches/CoachDetail.vue';
import CoachesList from '../pages/coaches/CoachesList.vue';
import CoachRegistation from '../pages/coaches/CoachRegistration.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestsReceived from '../pages/requests/RequestsReceived.vue';
import NotFound from '../pages/NotFound.vue';
import UserAuth from '../pages/auth/UserAuth.vue';

export default [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachesList },
  {
    path: '/coaches/:id',
    component: CoachDetail,
    props: true,
    children: [
      { path: 'contact', component: ContactCoach }, // /coaches/c1/contact
    ],
  },
  { path: '/register', meta: { requiresAuth: true }, component: CoachRegistation },
  { path: '/requests', meta: { requiresAuth: true }, component: RequestsReceived },
  { path: '/auth', meta: { requiresUnauth: true }, component: UserAuth },
  { path: '/:notFound(.*)', component: NotFound },
];
