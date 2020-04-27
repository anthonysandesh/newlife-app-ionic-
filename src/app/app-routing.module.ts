import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'member-services', loadChildren: './member-services/member-services.module#MemberServicesPageModule' },
  { path: 'carecell-details', loadChildren: './carecell-details/carecell-details.module#CarecellDetailsPageModule' },
  { path: 'carecell-reports', loadChildren: './carecell-reports/carecell-reports.module#CarecellReportsPageModule' },
  { path: 'carecells', loadChildren: './carecells/carecells.module#CarecellsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'video-player', loadChildren: './video-player/video-player.module#VideoPlayerPageModule' },
  { path: 'dialog-overview-example-dialog', loadChildren: './dialog-overview-example-dialog/dialog-overview-example-dialog.module#DialogOverviewExampleDialogPageModule' },
  { path: 'subscribe', loadChildren: './subscribe/subscribe.module#SubscribePageModule' },
  { path: 'feedback-form', loadChildren: './feedback-form/feedback-form.module#FeedbackFormPageModule' },
  { path: 'givings', loadChildren: './givings/givings.module#GivingsPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  // { path: 'live-stream', loadChildren: './live-stream/live-stream.module#LiveStreamPageModule' },
  { path: 'video-archives', loadChildren: './video-archives/video-archives.module#VideoArchivesPageModule' },
  { path: 'membership-form', loadChildren: './membership-form/membership-form.module#MembershipFormPageModule' },
  { path: 'sms', loadChildren: './sms/sms.module#SmsPageModule' },
  { path: 'visitor-enquiry', loadChildren: './visitor-enquiry/visitor-enquiry.module#VisitorEnquiryPageModule' },
  { path: 'otpdialog', loadChildren: './otpdialog/otpdialog.module#OtpdialogPageModule' },
  { path: 'amin-card', loadChildren: './amin-card/amin-card.module#AminCardPageModule' },
  { path: 'bulletin', loadChildren: './bulletin/bulletin.module#BulletinPageModule' },
  { path: 'lets-go-church', loadChildren: './lets-go-church/lets-go-church.module#LetsGoChurchPageModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' },
  { path: 'reading-plan', loadChildren: './reading-plan/reading-plan.module#ReadingPlanPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
