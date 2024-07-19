import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Admin_Home from './Components/Admin/Admin_Home';
import AdminDashboard from './Components/Admin/AdminDashboard';
import User_Dashboard from './Components/Client/User_Dashboard';
import Employee_Dashboard from './Components/Employee/Employee_Dashboard';
import ClientHome from './Components/Client/ClientHome';
import ClientProjects from './Components/Client/ClientProjects';
import ClientTask from './Components/Client/ClientTasks';
import ClientTimeSheet from './Components/Client/ClientTimeSheet';
import ClientProjectRoadmap from './Components/Client/ClientProjectRoadmap';
import ClientEstimates from './Components/Client/ClientEstimates';
import ClientInvoices from './Components/Client/ClientInvoices';
import ClientPayments from './Components/Client/ClientPayments';
import ClientCreditNote from './Components/Client/ClientCreditNote';
import ClientOrders from './Components/Client/ClientOrders';
import ClientTickets from './Components/Client/ClientTickets';
import ClientEvents from './Components/Client/ClientEvents';
import ClientNoticeBoard from './Components/Client/ClientNoticeBoard';
import ClientSettings from './Components/Client/ClientSettings';
import ClientContracts from './Components/Client/ClientContracts';
import ClientProjectCalender from './Components/Client/ClientProjectCalender';
import ClientTaskCalender from './Components/Client/ClientTaskCalender';
import ClientTaskBoard from './Components/Client/ClientTaskBoard';
import ClientTimelogCalendar from './Components/Client/ClientTimelogCalendar';
import ClientTimelogeEmployee from './Components/Client/ClientTimelogeEmployee';
import ClientSecuritySetting from './Components/Client/ClientSecuritySetting';
import ClientProducts from './Components/Client/ClientProducts';
import ClientProductsCart from './Components/Client/ClientProductsCart';
import ClientCreateTicket from './Components/Client/ClientCreateTicket';
import AdminPrivateDashboard from './Components/Admin/AdminPrivateDashboard';
import ClientProfile from './Components/Client/ClientProfile';
import AdminClient from './Components/Admin/AdminClient';
import AdminTicketTab from './Components/Admin/AdminTicketTab';
import AdminClientSection from './Components/Admin/AdminClientSection'
import AdminHrTab from './Components/Admin/AdminHrTab';
import AdminFinanceTab from './Components/Admin/AdminFinanceTab';
import AdminProjectTab from './Components/Admin/AdminProjectTab';
import AdminLeadContacts from './Components/Admin/AdminLeadContacts';
import AdminDeals from './Components/Admin/AdminDeals';
import AdminEmployeeSection from './Components/Admin/AdminEmployeeSection';
import AdminClientSectionProfile from './Components/Admin/AdminClientSectionProfile';
import AdminLeaveSection from './Components/Admin/AdminLeaveSection';
import AdminShiftRoaster from './Components/Admin/AdminShiftRoaster';
import AdminAttendenceSection from './Components/Admin/AdminAttendenceSection';
import AdminHolidaySection from './Components/Admin/AdminHolidaySection';
import AdminDesignationSection from './Components/Admin/AdminDesignationSection';
import AdminDepartmentSection from './Components/Admin/AdminDepartmentSection';
import AdminAppreciationSection from './Components/Admin/AdminAppreciationSection';
import AdminContractsSection from './Components/Admin/AdminContractsSection';
import AdminProjectsSection from './Components/Admin/AdminProjectsSection';
import AdminTasksSection from './Components/Admin/AdminTasksSection';
import AdminTimeSheetSection from './Components/Admin/AdminTimeSheetSection';
import AdminProjectRoadmapSection from './Components/Admin/AdminProjectRoadmapSection';
import AdminProposalSection from './Components/Admin/AdminProposalSection';
import AdminEstimatesSection from './Components/Admin/AdminEstimatesSection';
import AdminInvoicesSection from './Components/Admin/AdminInvoicesSection';
import AdminPaymentSection from './Components/Admin/AdminPaymentSection';
import AdminCreditNoteSection from './Components/Admin/AdminCreditNoteSection';
import AdminExpensesSection from './Components/Admin/AdminExpensesSection';
import AdminBankAccountSection from './Components/Admin/AdminBankAccountSection';
import AdminOrderSection from './Components/Admin/AdminOrderSection';
import AdminTicketsSection from './Components/Admin/AdminTicketsSection';
import AdminEventsSection from './Components/Admin/AdminEventsSection';
import AdminMessagesSection from './Components/Admin/AdminMessagesSection';
import AdminNoticeBoardSection from './Components/Admin/AdminNoticeBoardSection';
import AdminKnowledgeBaseSection from './Components/Admin/AdminKnowledgeBaseSection';
import AdminAssetsSection from './Components/Admin/AdminAssetsSection';
import AdminLetterGenerateSection from './Components/Admin/AdminLetterGenerateSection'
import AdminLetterTemplateSection from './Components/Admin/AdminLetterTemplateSection'
import AdminPayrollSection from './Components/Admin/AdminPayrollSection';
import AdminEmployeeSalerySection from './Components/Admin/AdminEmployeeSalerySection';
import AdminReportSection from './Components/Admin/AdminReportSection';
import AdminQrCodeSection from './Components/Admin/AdminQrCodeSection';
import AdminZoomMeetingSection from './Components/Admin/AdminZoomMeetingSection';
import AdminVendorSection from './Components/Admin/AdminVendorSection';
import AdminProductsSection from './Components/Admin/AdminProductsSection';
import AdminPurchaseOrderSection from './Components/Admin/AdminPurchaseOrderSection';
import AdminBillsSection from './Components/Admin/AdminBillsSection';
import AdminVendorPaymentsSection from './Components/Admin/AdminVendorPaymentsSection';
import AdminVendorCreditSection from './Components/Admin/AdminVendorCreditSection';
import AdminInventorySection from './Components/Admin/AdminInventorySection';
import AdminPurchaseReportsSection from './Components/Admin/AdminPurchaseReportsSection';
import AdminRecruitDashboardSection from './Components/Admin/AdminRecruitDashboardSection';
import AdminRecruitSkillsSection from './Components/Admin/AdminRecruitSkillsSection';
import AdminRecruitJobSection from './Components/Admin/AdminRecruitJobSection';
import AdminJobApplicationSection from './Components/Admin/AdminJobApplicationSection';
import AdminInterviewSchedule from './Components/Admin/AdminInterviewSchedule';
import AdminOfferLetterSection from './Components/Admin/AdminOfferLetterSection';
import AdminCandidatesSection from './Components/Admin/AdminCandidatesSection';
import AdminRecruitReportSection from './Components/Admin/AdminRecruitReportSection';
import AdminTimelogReportSection from './Components/Admin/AdminTimelogReportSection';
import AdminTaskReportSection from './Components/Admin/AdminTaskReportSection';
import AdminAttendenceReportSection from './Components/Admin/AdminAttendenceReportSection';
import AdminFinanceReportSection from './Components/Admin/AdminFinanceReportSection';
import AdminIncomevsExpenseReportSection from './Components/Admin/AdminIncomevsExpenseReportSection';
import AdminLeaveReportSection from './Components/Admin/AdminLeaveReportSection';
import AdminExpenseReportSection from './Components/Admin/AdminExpenseReportSection';
import AdminDealReportSection from './Components/Admin/AdminDealReportSection';
import AdminSalesReportSection from './Components/Admin/AdminSalesReportSection';

import EmployeeHome from './Components/Employee/EmployeeHome';
import EmployeeSettings from './Components/Employee/EmployeeSettings';
import EmployeeSecuritySetting from './Components/Employee/EmployeeSecuritySetting';
import EmployeeLeadContactsSection from './Components/Employee/EmployeeLeadContactsSection';
import EmployeeLeavesSection from './Components/Employee/EmployeeLeavesSection';
import EmployeeAttendenceSection from './Components/Employee/EmployeeAttendenceSection';
import EmployeeHolidaySection from './Components/Employee/EmployeeHolidaySection';
import EmployeeAppreciationSection from './Components/Employee/EmployeeAppreciationSection';
import EmployeeProjectsSection from './Components/Employee/EmployeeProjectsSection';
import EmployeeTaskSection from './Components/Employee/EmployeeTaskSection';
import EmployeeProjectRoadmapSection from './Components/Employee/EmployeeProjectRoadmapSection';
import EmployeeTimesheetSection from './Components/Employee/EmployeeTimesheetSection';
import EmployeeExpensesSection from './Components/Employee/EmployeeExpensesSection';
import EmployeeTicketSection from './Components/Employee/EmployeeTicketSection';
import EmployeeEventsSection from './Components/Employee/EmployeeEventsSection';
import EmployeeMessagesSection from './Components/Employee/EmployeeMessagesSection';
import EmployeeNoticeBoardSection from './Components/Employee/EmployeeNoticeBoardSection';
import EmployeeLeaveCalender from './Components/Employee/EmployeeLeaveCalender';
import EmployeeMyLeaveSection from './Components/Employee/EmployeeMyLeaveSection';
import EmployeeProfileSection from './Components/Employee/EmployeeProfileSection';
import AdminEmployeeProfile from './Components/Admin/AdminEmployeeProfile';
import AdminLeadContactProfile from './Components/Admin/AdminLeadContactProfile';
import AdminDealsProfile from './Components/Admin/AdminDealsProfile';
import AdminProfileDashboard from './Components/Admin/AdminProfileDashboard';
import AdminLeadForm from './Components/Admin/AdminLeadForm';
import AdminAppreciationAwardPage from './Components/Admin/AdminAppreciationAwardPage';
import LogInSection from './Components/DefaultPages/LogInSection';
import ForgetPassword from './Components/DefaultPages/ForgetPassword';
import AdminHolidayList from './Components/Admin/AdminHolidayList';
import AdminTaskboards from './Components/Admin/AdminTaskboards';
import AdminMyTasks from './Components/Admin/AdminMyTasks';
import AdminAddTaskCalender from './Components/Admin/AdminAddTaskCalender';
import AdminProposalInvoice from './Components/Admin/AdminProposalInvoice';
import AdminRecurringInvoice from './Components/Admin/AdminRecurringInvoice';
import Example from './Components/Admin/Example';
import AdminViewInvoice from './Components/Admin/AdminViewInvoice';
import AdminEstimateInvoice from './Components/Admin/AdminEstimateInvoice';
import AdminReccuringExpenses from './Components/Admin/AdminReccuringExpenses';
import AdminContractsInvoice from './Components/Admin/AdminContractsInvoice';
import AdminCompanySettings from './Components/Admin/AdminCompanySettings';
import AdminBuisnessAddress from './Components/Admin/AdminBuisnessAddress';
import AdminAppSetting from './Components/Admin/AdminAppSetting';
import AdminProfileSetting from './Components/Admin/AdminProfileSetting'
import AdminNotificationSetting from './Components/Admin/AdminNotificationSetting';
import AdminPaymentSetting from './Components/Admin/AdminPaymentSetting';
import PayrollInvoice from './Components/Admin/PayrollInvoice';
import AdminPurchaseProductProfile from './Components/Admin/AdminPurchaseProductProfile';
import AdminCurrencySetting from './Components/Admin/AdminCurrencySetting';
import AdminFinanceSetting from './Components/Admin/AdminFinanceSetting';
import AdminContractSetting from './Components/Admin/AdminContractSetting';
import AdminTaxSetting from './Components/Admin/AdminTaxSetting';
import AdminTIcketSetting from './Components/Admin/AdminTIcketSetting';
import AdminProjectSetting from './Components/Admin/AdminProjectSetting';
import AdminUpdateApp from './Components/Admin/AdminUpdateApp';
import AdminZoomSetting from './Components/Admin/AdminZoomSetting';
import AdminRestApiSetting from './Components/Admin/AdminRestApiSetting';
import AdminRecruitSetting from './Components/Admin/AdminRecruitSetting';
import AdminPurchaseSetting from './Components/Admin/AdminPurchaseSetting';
import AdminAttendenceSetting from './Components/Admin/AdminAttendenceSetting';
import AdminLeaveSetting from './Components/Admin/AdminLeaveSetting';
import AdminCustomField from './Components/Admin/AdminCustomField';
import AdminRolesPermissionSetting from './Components/Admin/AdminRolesPermissionSetting';
import AdminMessageSetting from './Components/Admin/AdminMessageSetting';
import AdminLeadSetting from './Components/Admin/AdminLeadSetting';
import AdminAssetSetting from './Components/Admin/AdminAssetSetting';
import AdminSignUpSetting from './Components/Admin/AdminSignUpSetting';
import AdminDatabaseSetting from './Components/Admin/AdminDatabaseSetting';
import AdminCustomLinkSetting from './Components/Admin/AdminCustomLinkSetting';
import AdminGoogleCalenderSetting from './Components/Admin/AdminGoogleCalenderSetting';
import AdminSocialLoginSetting from './Components/Admin/AdminSocialLoginSetting';
import AdminLanguageSetting from './Components/Admin/AdminLanguageSetting';
import AdminStorageSetting from './Components/Admin/AdminStorageSetting';
import AdminTimeLogSetting from './Components/Admin/AdminTimeLogSetting';
import AdminTaskSetting from './Components/Admin/AdminTaskSetting';
import AdminSecuritySetting from './Components/Admin/AdminSecuritySetting';
import AdminThemeSetting from './Components/Admin/AdminThemeSetting';
import AdminPayrollSetting from './Components/Admin/AdminPayrollSetting';
import SettingSection from './Components/Admin/SettingSection';
import AdminEmployeeEditForm from './Components/Admin/AdminEmployeeEditForm';
import EmployeeHolidayListView from './Components/Employee/EmployeeHolidayListView';
import EmployeeProfileSetting from './Components/Employee/EmployeeProfileSetting';
import AdminEditCompanySetting from './Components/Admin/AdminEditCompanySetting';
import AdminAwardForm from './Components/Admin/AdminAwardForm';
function App() {
  const isLoggedIn = localStorage.getItem('token');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogInSection />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/admin' element={isLoggedIn ? <Admin_Home /> : <LogInSection />}>
            <Route index element={<AdminDashboard />} />
            <Route path='/admin/private-dashboard' element={<AdminPrivateDashboard />} />
            <Route path='/admin/employee-profile/:empId' element={<AdminEmployeeProfile />} />
            <Route path='/admin/employee-edit-profile/:empId' element={<AdminEmployeeEditForm />} />
            <Route path='/admin/dashboard' element={<AdminProfileDashboard />} />

            <Route path='/admin/client-profile/:clientId' element={<AdminClientSectionProfile />} />
            <Route path='/admin/project-tab' element={<AdminProjectTab />} />
            <Route path='/admin/client-tab' element={<AdminClientSection />} />
            <Route path='/admin/hr-tab' element={<AdminHrTab />} />
            <Route path='/admin/ticket-tab' element={<AdminTicketTab />} />
            <Route path='/admin/finance-tab' element={<AdminFinanceTab />} />

            {/* Admin Lead Section Routing */}
            <Route path='/admin/lead-contacts' element={<AdminLeadContacts />} />
            <Route path='/admin/lead-form' element={<AdminLeadForm />} />
            <Route path='/admin/leadContactsProfile/:id' element={<AdminLeadContactProfile />} />
            <Route path='/admin/deals' element={<AdminDeals />} />
            <Route path='/admin/deals/profile/:id' element={<AdminDealsProfile />} />
            {/* Admin Client Section Routing */}
            <Route path='/admin/clients' element={<AdminClient />} />

            {/* Admin Hr Section Routing */}
            <Route path='/admin/employee' element={<AdminEmployeeSection />} />
            <Route path='/admin/leaves' element={<AdminLeaveSection />} />
            <Route path='/admin/shift-roaster' element={<AdminShiftRoaster />} />
            <Route path='/admin/attendence' element={<AdminAttendenceSection />} />
            <Route path='/admin/holiday' element={<AdminHolidaySection />} />
            <Route path='/admin/holiday-list' element={<AdminHolidayList />} />
            <Route path='/admin/designation' element={<AdminDesignationSection />} />
            <Route path='/admin/department' element={<AdminDepartmentSection />} />
            <Route path='/admin/appreciation' element={<AdminAppreciationSection />} />
            <Route path='/admin/appreciation-page' element={<AdminAwardForm />} />
            <Route path='/admin/appreciation-award' element={<AdminAppreciationAwardPage />} />

            {/* Admin Work Section Routing */}
            <Route path='/admin/contracts' element={<AdminContractsSection />} />
            <Route path='/admin/contracts-invoice' element={<AdminContractsInvoice />} />
            <Route path='/admin/projects' element={<AdminProjectsSection />} />
            <Route path='/admin/tasks' element={<AdminTasksSection />} />
            <Route path='/admin/my-tasks' element={<AdminMyTasks />} />
            <Route path='/admin/my-tasks-calender' element={<AdminAddTaskCalender />} />
            <Route path='/admin/task-board' element={<AdminTaskboards />} />
            <Route path='/admin/timesheet' element={<AdminTimeSheetSection />} />
            <Route path='/admin/project-roadmap' element={<AdminProjectRoadmapSection />} />

            {/* Admin Finance Section Routing */}
            <Route path='/admin/proposal' element={<AdminProposalSection />} />
            <Route path='/admin/proposal-invoice/:proposalId' element={<AdminProposalInvoice />} />
            <Route path='/admin/estimates' element={<AdminEstimatesSection />} />
            <Route path='/admin/estimates-invoice' element={<AdminEstimateInvoice />} />
            <Route path='/admin/invoices' element={<AdminInvoicesSection />} />
            <Route path='/admin/view-invoice' element={<AdminViewInvoice />} />
            <Route path='/admin/recurring-invoices' element={<AdminRecurringInvoice />} />
            <Route path='/admin/payments' element={<AdminPaymentSection />} />
            <Route path='/admin/credit-note' element={<AdminCreditNoteSection />} />
            <Route path='/admin/expenses' element={<AdminExpensesSection />} />
            <Route path='/admin/reccuring-expenses' element={<AdminReccuringExpenses />} />
            <Route path='/admin/bank-account' element={<AdminBankAccountSection />} />
            <Route path='/admin/example' element={<Example />} />

            {/* Admin Order Section Routing */}
            <Route path='/admin/orders' element={<AdminOrderSection />} />

            {/* Admin Tickets Section Routing */}
            <Route path='/admin/tickets' element={<AdminTicketsSection />} />

            {/* Admin Events Section Routing */}
            <Route path='/admin/events' element={<AdminEventsSection />} />

            {/* Admin Messages Section Routing */}
            <Route path='/admin/messages' element={<AdminMessagesSection />} />

            {/* Admin Notice Section Routing */}
            <Route path='/admin/notice-board' element={<AdminNoticeBoardSection />} />
            {/* Admin Knowledge Base Section Routing */}
            <Route path='/admin/knowledge-base' element={<AdminKnowledgeBaseSection />} />
            {/* Admin Assets Section Routing */}
            <Route path='/admin/assets' element={<AdminAssetsSection />} />

            {/* Admin Letter Section Routing */}
            <Route path='/admin/generate' element={<AdminLetterGenerateSection />} />
            <Route path='/admin/template' element={<AdminLetterTemplateSection />} />
            {/* Admin Payroll Section Routing */}
            <Route path='/admin/payroll' element={<AdminPayrollSection />} />
            <Route path='/admin/payroll-invoice' element={<PayrollInvoice />} />
            <Route path='/admin/employee-salery' element={<AdminEmployeeSalerySection />} />
            <Route path='/admin/payroll-reports' element={<AdminReportSection />} />
            {/* Admin Purchase Section Routing */}
            <Route path='/admin/vendor' element={<AdminVendorSection />} />
            <Route path='/admin/products' element={<AdminProductsSection />} />
            <Route path='/admin/products/{productId}' element={<AdminPurchaseProductProfile />} />
            <Route path='/admin/purchase-order' element={<AdminPurchaseOrderSection />} />
            <Route path='/admin/bills' element={<AdminBillsSection />} />
            <Route path='/admin/vendor-payments' element={<AdminVendorPaymentsSection />} />
            <Route path='/admin/vendor-credits' element={<AdminVendorCreditSection />} />
            <Route path='/admin/inventory' element={<AdminInventorySection />} />
            <Route path='/admin/purchase-reports' element={<AdminPurchaseReportsSection />} />

            {/* Admin Qr Code Section Routing */}
            <Route path='/admin/Qr-code' element={<AdminQrCodeSection />} />
            {/* Admin Recruit Section Routing */}
            <Route path='/admin/recruit-dashborad' element={<AdminRecruitDashboardSection />} />
            <Route path='/admin/skills' element={<AdminRecruitSkillsSection />} />
            <Route path='/admin/Jobs' element={<AdminRecruitJobSection />} />
            <Route path='/admin/job-application' element={<AdminJobApplicationSection />} />
            <Route path='/admin/interview-schedule' element={<AdminInterviewSchedule />} />
            <Route path='/admin/offer-letters' element={<AdminOfferLetterSection />} />
            <Route path='/admin/candidate-databases' element={<AdminCandidatesSection />} />
            <Route path='/admin/reports' element={<AdminRecruitReportSection />} />

            {/* Admin Zoom Meeting Section Routing */}
            <Route path='/admin/zoom-meeting' element={<AdminZoomMeetingSection />} />
            {/* Admin Reports Section Routing */}
            <Route path='/admin/task-report' element={<AdminTaskReportSection />} />
            <Route path='/admin//timelog-Report' element={<AdminTimelogReportSection />} />
            <Route path='/admin/finance-report' element={<AdminFinanceReportSection />} />
            <Route path='/admin/income-expenses' element={<AdminIncomevsExpenseReportSection />} />
            <Route path='/admin/leave-report' element={<AdminLeaveReportSection />} />
            <Route path='/admin/attendence-report' element={<AdminAttendenceReportSection />} />
            <Route path='/admin/expense-report' element={<AdminExpenseReportSection />} />
            <Route path='/admin/deal-report' element={<AdminDealReportSection />} />
            <Route path='/admin/sales-report' element={<AdminSalesReportSection />} />
            {/* Admin Settings Section Routing */}
            <Route path='/admin/settings' element={<SettingSection />} >
              <Route path="" element={<AdminCompanySettings />} />
              <Route path="edit-company" element={<AdminEditCompanySetting />} />
              <Route path="buisnessSetting" element={<AdminBuisnessAddress />} />
              <Route path="appSetting" element={<AdminAppSetting />} />
              <Route path="profileSetting" element={<AdminProfileSetting />} />
              <Route path="notification-setting" element={<AdminNotificationSetting />} />
              <Route path="currency-setting" element={<AdminCurrencySetting />} />
              <Route path="payment-setting" element={<AdminPaymentSetting />} />
              <Route path="finance-settings" element={<AdminFinanceSetting />} />
              <Route path="contract-settings" element={<AdminContractSetting />} />
              <Route path="tax-settings" element={<AdminTaxSetting />} />
              <Route path="ticket-settings" element={<AdminTIcketSetting />} />
              <Route path="project-settings" element={<AdminProjectSetting />} />
              <Route path="attendance-settings" element={<AdminAttendenceSetting />} />
              <Route path="leaves-settings" element={<AdminLeaveSetting />} />
              <Route path="custom-fields" element={<AdminCustomField />} />
              <Route path="Roles&Permissions" element={<AdminRolesPermissionSetting />} />
              <Route path="message-settings" element={<AdminMessageSetting />} />
              <Route path="lead-settings" element={<AdminLeadSetting />} />
              <Route path="time-log-settings" element={<AdminTimeLogSetting />} />
              <Route path="task-settings" element={<AdminTaskSetting />} />
              <Route path="security-settings" element={<AdminSecuritySetting />} />
              <Route path="theme-settings" element={<AdminThemeSetting />} />
              <Route path="module-settings" element={<AdminSecuritySetting />} />
              <Route path="storage-settings" element={<AdminStorageSetting />} />
              <Route path="language-settings" element={<AdminLanguageSetting />} />
              <Route path="social-login-setting" element={<AdminSocialLoginSetting />} />
              <Route path="google-calendar-settings" element={<AdminGoogleCalenderSetting />} />
              <Route path="custom-link-settings" element={<AdminCustomLinkSetting />} />
              <Route path="database-backup-settings" element={<AdminDatabaseSetting />} />
              <Route path="sign-up-settings" element={<AdminSignUpSetting />} />
              <Route path="asset-settings" element={<AdminAssetSetting />} />
              <Route path="payroll-settings" element={<AdminPayrollSetting />} />
              <Route path="purchase-settings" element={<AdminPurchaseSetting />} />
              <Route path="recruit-settings" element={<AdminRecruitSetting />} />
              <Route path="Rest-API-Settings" element={<AdminRestApiSetting />} />
              <Route path="zoom-settings" element={<AdminZoomSetting />} />
              <Route path="Update-App" element={<AdminUpdateApp />} />
            </Route>
            {/* <Route path='/admin/setting-section' element={<SettingSection />}/> */}
          </Route>
          <Route path='/employee' element={isLoggedIn ? <EmployeeHome /> : <LogInSection />}>
            <Route index element={<Employee_Dashboard />} />
            <Route path='/employee/profile' element={<EmployeeProfileSection />} />
            <Route path='/employee/lead-contacts' element={<EmployeeLeadContactsSection />} />
            <Route path='/employee/leaves' element={<EmployeeLeavesSection />} />
            <Route path='/employee/leaves-calendar' element={<EmployeeLeaveCalender />} />
            <Route path='/employee/my-leaves' element={<EmployeeMyLeaveSection />} />
            <Route path='/employee/attendance' element={<EmployeeAttendenceSection />} />
            <Route path='/employee/holiday' element={<EmployeeHolidaySection />} />
            <Route path='/employee/holiday-list' element={<EmployeeHolidayListView />} />
            <Route path='/employee/appreciation' element={<EmployeeAppreciationSection />} />
            {/* Employee Work Section */}
            <Route path='/employee/projects' element={<EmployeeProjectsSection />} />
            <Route path='/employee/tasks' element={<EmployeeTaskSection />} />
            <Route path='/employee/timesheet' element={<EmployeeTimesheetSection />} />
            <Route path='/employee/project-roadmap' element={<EmployeeProjectRoadmapSection />} />
            <Route path='/employee/expenses' element={<EmployeeExpensesSection />} />
            {/* Employee Ticket Section */}
            <Route path='/employee/tickets' element={<EmployeeTicketSection />} />
            {/* Employee Event Section */}
            <Route path='/employee/events' element={<EmployeeEventsSection />} />
            {/* Employee Messages Section */}
            <Route path='/employee/messages' element={<EmployeeMessagesSection />} />
            {/* Employee Notice Board */}
            <Route path='/employee/notice-board' element={<EmployeeNoticeBoardSection />} />
          
            {/* Employee Setting Section */}
            <Route path='/employee/settings' element={<EmployeeSettings />} >
              <Route path='' element={<EmployeeProfileSetting />} />
              <Route path='security-settings' element={<EmployeeSecuritySetting />} />
            </Route>
          </Route>
          <Route path='/client' element={isLoggedIn ? <ClientHome /> : <LogInSection />}>
            <Route index element={<User_Dashboard />} />
            <Route path='/client/Contracts' element={<ClientContracts />} />
            <Route path='/client/client-profile' element={<ClientProfile />} />
            <Route path='/client/client-project' element={<ClientProjects />} />
            <Route path='/client/client-project-calender' element={<ClientProjectCalender />} />
            <Route path='/client/Tasks' element={<ClientTask />} />
            <Route path='/client/client-task-calender' element={<ClientTaskCalender />} />
            <Route path='/client/client-task-board' element={<ClientTaskBoard />} />
            <Route path='/client/TimeSheet' element={<ClientTimeSheet />} />
            <Route path='/client/timelog-calendar' element={<ClientTimelogCalendar />} />
            <Route path='/client/timelog-byemployee' element={<ClientTimelogeEmployee />} />
            <Route path='/client/project-roadmap' element={<ClientProjectRoadmap />} />
            <Route path='/client/estimates' element={<ClientEstimates />} />
            <Route path='/client/invoices' element={<ClientInvoices />} />
            <Route path='/client/payments' element={<ClientPayments />} />
            <Route path='/client/credit-note' element={<ClientCreditNote />} />
            <Route path='/client/orders' element={<ClientOrders />} />
            <Route path='/client/products' element={<ClientProducts />} />
            <Route path='/client/products-cart' element={<ClientProductsCart />} />
            <Route path='/client/tickets' element={<ClientTickets />} />
            <Route path='/client/create-tickets' element={<ClientCreateTicket />} />
            <Route path='/client/events' element={<ClientEvents />} />
            <Route path='/client/tickets' element={<ClientTickets />} />
            <Route path='/client/notice-board' element={<ClientNoticeBoard />} />
            <Route path='/client/settings' element={<ClientSettings />} />
            <Route path='/client/security-settings' element={<ClientSecuritySetting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
