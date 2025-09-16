export const questionMapping: Record<string, string[]> = {
  "Create a job description for a Senior UX Designer.": [
    "Retrieving JD template from **Amazon S3**...",
    "Using **Amazon Bedrock (Claude 3)** to tailor template with UX specifics...",
    "Draft generated. Awaiting approval via **Amazon Simple Notification Service (SNS)** topic.",
    "(Approval received) Triggering **AWS Lambda** function to post to careers page API.",
    "Using a secure **AWS Secrets Manager** key to authenticate with LinkedIn API...",
    "Task Complete. Job posted."
  ],
  "Screen the latest 20 applicants for the Junior Marketing role.": [
    "Triggering **AWS Step Functions** workflow to process applicants.",
    "Using **Amazon Textract** to parse CVs stored in an S3 bucket...",
    "**AWS Lambda** function comparing extracted text against job criteria...",
    "Screening complete. Updating applicant status in **Amazon DynamoDB** table.",
    "Task Complete. A summary has been compiled and sent via **Amazon Simple Email Service (SES)**."
  ],
  "Schedule a 30-minute screening call with candidate Alice Miller.": [
    "Retrieving candidate data from **Amazon DynamoDB**.",
    "Invoking **AWS Lambda** to query Microsoft Graph API for calendar availability...",
    "Found 3 slots. Sending options to candidate via **Amazon SES**.",
    "(Response received via API Gateway) Triggering Lambda to book meeting...",
    "Calendar invitation sent.",
    "Task Complete."
  ],
  "Generate interview kits for the 3 finalists for the Data Analyst position.": [
    "Retrieving CVs and templates from **Amazon S3**.",
    "**AWS Lambda** function assembling individual PDF kits using a library like PDF-lib.",
    "Interview kits generated and stored in a secure S3 bucket.",
    "Sending secure, pre-signed S3 download links to the panel via **Amazon SES**.",
    "Task Complete."
  ],
  "Find three potential candidates for a 'Head of Sustainability' role on LinkedIn.": [
    "**AWS Step Functions** workflow initiated for talent sourcing.",
    "Using **AWS Lambda** with a secure secret from **Secrets Manager** to query LinkedIn Talent API.",
    "**Amazon Bedrock (Claude 3)** analysing search results to rank and summarise top profiles.",
    "Summary document stored in **S3**.",
    "Notifying you via **Amazon SES** with a link to the summary.",
    "Task Complete."
  ],
  "Send rejection emails to all applicants for the 'Office Manager' role.": [
    "Querying **Amazon DynamoDB** to filter for 'Rejected' applicants for job #OM45.",
    "**Amazon SES** bulk-templating operation initiated to send personalized emails.",
    "Emails sent to 17 applicants.",
    "Task Complete."
  ],
  "Prepare an offer letter for Jane Doe for the Software Engineer role...": [
    "**AWS Lambda** retrieving template from **S3** and data from **DynamoDB**.",
    "Using **Amazon Bedrock** to populate the letter in a natural tone.",
    "Offer letter generated. Stored in **S3**. Awaiting your review via an **SNS** notification.",
    "Task Pending Approval."
  ],
  "Check the status of the background check for candidate Tom Hardy.": [
    "**AWS Lambda** function using a secret from **Secrets Manager** to call third-party API.",
    "Parsing API response for status...",
    "Status: 'In Progress'. Pushing real-time update to our frontend via **AWS AppSync**.",
    "Task Complete."
  ],
  "Draft a social media post for our company's Instagram about hiring.": [
    "**Amazon Bedrock (Claude 3)** analysing previous posts stored in **S3** for tone.",
    "Generating draft copy and relevant hashtags.",
    "Using **Amazon Rekognition** to find a suitable, brand-aligned image from our asset library in S3.",
    "Draft content prepared. Awaiting approval.",
    "Task Pending Approval."
  ],
  "What is our average time-to-hire for engineering roles this year?": [
    "Running a federated query with **Amazon Athena** across our DynamoDB and RDS databases.",
    "Calculating average from query results...",
    "The average time-to-hire is 42 days.",
    "Task Complete."
  ],
  "Onboard our new software developer, Priya Sharma.": [
    "Triggering 'Onboarding' **AWS Step Functions** workflow.",
    "Creating employee profile in **Amazon RDS** database.",
    "Adding user to **AWS SSO (Identity Center)** for federated access.",
    "Calling Okta API via **Lambda** to provision software licenses.",
    "Scheduling induction meetings via **Amazon SES** and Graph API.",
    "Task Complete."
  ],
  "Process the resignation for Mark Johnson.": [
    "Triggering 'Offboarding' **AWS Step Functions** workflow.",
    "Calculating final pay using a **Lambda** function.",
    "Scheduling exit interview via **SES**.",
    "Scheduling account deactivation in **AWS SSO** for end-of-day.",
    "Task Complete."
  ],
  "Prepare an onboarding plan for our new remote intern, Sam Wilson.": [
    "Retrieving intern checklist from **S3**.",
    "Using **Amazon Bedrock** to create a personalized week-1 schedule.",
    "Onboarding plan generated. Sent to manager for approval via **SNS**.",
    "Task Pending Approval."
  ],
  "Revoke all system access for contractor Emily White.": [
    "**AWS Lambda** function initiated to query **AWS SSO** for active sessions.",
    "Executing 'revoke-user-access' command against Azure AD and Salesforce APIs.",
    "All access has been revoked. Logging action in **Amazon CloudWatch Logs**.",
    "Task Complete."
  ],
  "Send a 'first-day welcome' email to all new hires starting next Monday.": [
    "Querying **Amazon RDS** for employees with a start date of Sep 22nd.",
    "Using **Amazon SES** with a template to draft personalized welcome emails.",
    "Emails scheduled via **Amazon EventBridge Scheduler**.",
    "Task Complete."
  ],
  "Assign mandatory 'Health & Safety' and 'Data Protection' training.": [
    "**AWS Lambda** querying RDS for new hires.",
    "Calling our LMS provider's API to enroll users.",
    "Enrolling 4 new hires. Logging transaction in **CloudWatch Logs**.",
    "Task Complete."
  ],
  "Schedule a 90-day probation review for Priya Sharma.": [
    "**Amazon EventBridge Scheduler** triggering a Lambda function on day 80.",
    "**Lambda** function analysing calendars via Microsoft Graph API.",
    "Probation review meeting scheduled.",
    "Task Complete."
  ],
  "Transfer all of Mark Johnson's documents from OneDrive to his manager.": [
    "**AWS Lambda** function authenticating to M365 via a secret in **Secrets Manager**.",
    "Initiating content transfer API call.",
    "Transfer complete. Logging confirmation in **DynamoDB**.",
    "Task Complete."
  ],
  "What is the current salary band for a 'Senior Product Manager' role?": [
    "**AWS Lambda** running a secure query against our compensation table in **Amazon RDS**.",
    "The current salary band is £75,000 - £95,000.",
    "Task Complete."
  ],
  "Enrol new employee Ben Carter in the private health insurance plan.": [
    "**AWS Lambda** retrieving Ben's details from **RDS**.",
    "Using **Secrets Manager** to securely call the Bupa provider API.",
    "Enrolment successful. Storing policy documents in a secure **S3** bucket.",
    "Task Complete."
  ],
  "Process a one-time bonus of £1,500 for Sarah Jones.": [
    "Triggering 'Bonus Approval' **AWS Step Functions** workflow.",
    "Awaiting approval from manager via an **SNS** topic.",
    "(Approval received) Notifying payroll via **Amazon SQS** queue.",
    "Task Complete."
  ],
  "Generate total reward statements for all members of the sales team.": [
    "**AWS Glue** job running to ETL data from RDS and DynamoDB into a temporary data store.",
    "**Lambda** function generating individual PDF statements.",
    "Statements securely sent to each employee via **Amazon SES**.",
    "Task Complete."
  ],
  "Remind all employees to submit their expense reports for last month.": [
    "Drafting reminder in **Lambda**.",
    "Sending notification to Slack via an API call secured with **Secrets Manager**.",
    "Notification sent.",
    "Task Complete."
  ],
  "How many employees are enrolled in our cycle-to-work scheme?": [
    "Running a simple query against the 'Benefits' table in **Amazon RDS**.",
    "There are currently 48 employees enrolled.",
    "Task Complete."
  ],
  "Increase Olivia Chen's salary by 5% effective October 1st.": [
    "Triggering 'Compensation Change' **Step Functions** workflow.",
    "Updating salary field in **Amazon RDS**.",
    "Pushing notification to payroll's **SQS** queue.",
    "Change of terms letter generated by **Lambda** and sent via **SES**.",
    "Task Complete."
  ],
  "Log a formal grievance for an employee in the IT department.": [
    "**Lambda** function creating a new confidential case in a secure **DynamoDB** table.",
    "Using **SES** to send an encrypted acknowledgement letter.",
    "Case #GRV2025-09 created.",
    "Task Complete."
  ],
  "Initiate the annual performance review cycle for all departments.": [
    "**Amazon EventBridge** rule triggering a **Lambda** function.",
    "**Lambda** sends company-wide announcement via **SES**.",
    "**Lambda** calls our performance tool's API to assign tasks.",
    "Cycle initiated.",
    "Task Complete."
  ],
  "Draft a Performance Improvement Plan (PIP) for an employee...": [
    "Retrieving PIP template from **S3**.",
    "Blank template emailed to manager via **SES**.",
    "Task Complete."
  ],
  "Anonymously survey the engineering team about their current morale.": [
    "**Lambda** generating unique, untraceable survey links.",
    "Using **SES** to send links. Responses are stored anonymously in a **DynamoDB** table.",
    "Survey sent.",
    "Task Complete."
  ],
  "What is our company's policy on flexible working requests?": [
    "Querying **Amazon Kendra**, our intelligent search service, which has indexed our knowledge base in S3.",
    "**Kendra** has extracted the relevant policy details. Answer sent to your email.",
    "Task Complete."
  ],
  "Log a long-term sickness absence for John Doe, starting today.": [
    "Updating employee status in **Amazon RDS**.",
    "Creating a weekly reminder using **Amazon EventBridge Scheduler**.",
    "Absence logged.",
    "Task Complete."
  ],
  "Find a certified mediator to help resolve a team conflict.": [
    "**AWS Lambda** querying our approved vendor database in **RDS**.",
    "A list with contact details has been sent to you via **SES**.",
    "Task Complete."
  ],
  "Generate a report on employee turnover for Q3 2025.": [
    "**Amazon Athena** executing a federated query across our HR databases.",
    "**Amazon QuickSight** generating a visual dashboard from the Athena query results.",
    "Report generated. A link to the QuickSight dashboard has been sent to you.",
    "Task Complete."
  ],
  "What is our current gender pay gap?": [
    "An **AWS Glue** job running nightly to anonymise and process payroll data.",
    "Querying the processed data in **Amazon Redshift** for the latest figures.",
    "Our current mean gender pay gap is 12.5%.",
    "Task Complete."
  ],
  "List all employees whose 'Right to Work' visas expire in the next 90 days.": [
    "An **Amazon EventBridge** rule runs daily, triggering a **Lambda** function.",
    "**Lambda** queries **RDS** for visas expiring in the next 90 days.",
    "Found 2 employees. A high-priority notification sent via **SNS** to the HR team.",
    "Task Complete."
  ],
  "Confirm all new hires from last month have completed their GDPR training.": [
    "**Lambda** function cross-referencing **RDS** new hire list with LMS data stored in **S3 Data Lake**.",
    "All 7 new hires have completed the training.",
    "Task Complete."
  ],
  "What is our overall employee headcount as of today?": [
    "Querying a materialized view in **Amazon Aurora (RDS)** that is updated in real-time.",
    "As of September 16th, 2025, our total headcount is 314 employees.",
    "Task Complete."
  ],
  "Generate a diversity and inclusion report for the leadership team.": [
    "**AWS Glue** job running to anonymise and aggregate D&I data.",
    "Generating charts and saving the report to a secure **S3** bucket with **AWS KMS** encryption.",
    "D&I report generated.",
    "Task Complete."
  ],
  "Check if our employee handbook is compliant with the latest UK employment laws.": [
    "Using **Amazon Kendra** with its 'custom synonym' feature to search for legal terms.",
    "**Amazon Bedrock (Claude 3)** comparing Kendra's findings against a feed of recent legislation changes.",
    "Analysis complete. The policy on statutory sick pay may need updating.",
    "Task Complete."
  ],
  "Archive all employee records for staff who left more than 6 years ago.": [
    "**AWS Lambda** querying **RDS** for applicable records.",
    "Transitioning records from RDS to long-term, cheaper storage in **Amazon S3 Glacier Deep Archive**.",
    "18 employee records have been securely archived.",
    "Task Complete."
  ],
  "Book a meeting room for the HR team's monthly meeting this Friday.": [
    "**Lambda** querying M365 calendars via Graph API.",
    "Room 'Innovate' has been booked.",
    "Task Complete."
  ],
  "Order a new ergonomic chair for Ben Carter and have it sent to his home.": [
    "**Lambda** using a secret from **Secrets Manager** to authenticate to vendor API.",
    "Order placed.",
    "Task Complete."
  ],
  "Draft a company-wide announcement about the upcoming bank holiday.": [
    "**Lambda** drafting a message.",
    "Announcement ready to be posted. Awaiting your confirmation via an **SNS** approval topic.",
    "Task Pending Approval."
  ],
  "Who is Olivia Chen's line manager?": [
    "Performing a direct lookup in our **Amazon Neptune** graph database, which stores organisational hierarchy.",
    "Olivia Chen's line manager is Amelia Vance.",
    "Task Complete."
  ],
  "Renew our company's subscription to our HR software.": [
    "**Lambda** authenticating to the provider's billing portal API.",
    "Subscription renewed. Saving invoice PDF to **S3**.",
    "Task Complete."
  ],
  "Translate our 'Welcome to the Team' document into Spanish.": [
    "Retrieving document from **S3**.",
    "Processing content through **Amazon Translate**.",
    "Spanish version saved back to **S3**.",
    "Task Complete."
  ],
  "Set up a new Slack channel for the 'Social Committee'.": [
    "**Lambda** function calling the Slack API.",
    "Channel created and members invited.",
    "Task Complete."
  ],
  "What training courses did the marketing team complete last quarter?": [
    "**Amazon Athena** querying our LMS data lake in **S3**.",
    "A list of completed courses has been compiled and sent via **SES**.",
    "Task Complete."
  ],
  "Send a password reset link to employee John Doe.": [
    "**Lambda** function interacting with our **Amazon Cognito** user pool.",
    "Password reset process initiated.",
    "Task Complete."
  ],
  "Summarise the key takeaways from our last employee engagement survey.": [
    "Retrieving anonymised survey comments from **DynamoDB**.",
    "Using **Amazon Comprehend** for topic modeling and sentiment analysis.",
    "**Amazon Bedrock (Claude 3)** generating a final summary from Comprehend's analysis.",
    "Summary generated and sent via **SES**.",
    "Task Complete."
  ]
};