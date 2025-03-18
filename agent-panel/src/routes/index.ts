import { Component, lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const AgentCallBackSupport = lazy(() => import('../components/Support/Agent-Call-Back-Support'));
const ImportPNR = lazy(() => import('../components/Support/Import-pnr'));
const CreditRequest = lazy(() => import('../components/Support/Credit-Request'));
const EscalationMatrix = lazy(() => import('../components/Support/Escalation-matrix'));
const UploadAmount = lazy(() => import('../components/Support/Upload-Amount'));
const AirlineInformation = lazy(() => import('../components/Support/Airline-Information'));
const CancellationPolicy = lazy(() => import('../components/Support/Cancellation-policy'));
const DepositUpdate = lazy(() => import('../components/Support/Deposit-Update'));
const CreditDebitCard = lazy(() => import('../components/Admin/Credit-debit-cards'));
const AddMarkupAfterBooking = lazy(() => import('../components/Admin/Add-markup-after-booking'));
const SetMarkup = lazy(() => import('../components/Admin/Set-Markup'));
const CommissionDetails = lazy(() => import('../components/Admin/Commission-details'));
const AgentProfile = lazy(() => import('../pages/Profile'));

const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path: '/support/agentCallBackSupport',
    title: 'Agent Call Back Support',
    component: AgentCallBackSupport,
  },
  {
    path: '/support/importPnr',
    title: 'Import PNR',
    component: ImportPNR,
  },
  {
    path: '/support/creditRequest',
    title: 'Credit Request',
    component: CreditRequest,
  },
  {
    path: '/support/escalationMatrix',
    title: 'Escalation Matrix',
    component: EscalationMatrix,
  },
  {
    path: '/support/uploadAmount',
    title: 'Upload Amount',
    component: UploadAmount,
  },
  {
    path: '/support/airlineInformation',
    title: 'Airline Information',
    component: AirlineInformation,
  },
  {
    path: '/support/cancellationPolicy',
    title: 'Cancellation Policy',
    component: CancellationPolicy,
  },
  {
    path: '/support/depositUpdate',
    title: 'Deposit Update',
    component: DepositUpdate,
  },
  {
    path: '/admin/savecards',
    title: 'Credit/Debit Card',
    component: CreditDebitCard,
  },
  {
    path: '/admin/addMarkupAfterBooking',
    title: 'Add Markup After Booking',
    component: AddMarkupAfterBooking,
  },
  {
    path: '/admin/setMarkup',
    title: 'Set Markup',
    component: SetMarkup,
  },
  {
    path: '/admin/showCommissionDetails',
    title: 'Show Commission Details',
    component: CommissionDetails,
  },
  {
    path: '/admin/agentProfile',
    title: 'Agent Profile',
    component: AgentProfile,
  }
];

const routes = [...coreRoutes];
export default routes;
