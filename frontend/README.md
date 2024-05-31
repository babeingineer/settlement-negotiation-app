# LayLine Frontend Assessment

## Instructions

### Overview

This technical challenge involves implementing a settlement process between two parties, Party A and Party B. The system should handle iterative negotiation of settlement amounts by Party A, along with approvals or objections from Party B. The process should ensure that all changes and responses are reflected on Party A's and Party B's interface.

### Part 1: Settlement Submission and Negotiation

#### Objective

Create a system where Party A can submit a settlement amount to Party B. Party A should be able to modify the submitted amount an unlimited number of times until Party B responds. Upon receiving the submission, Party B can either raise an objection or agree to the amount. If Party B disputes the amount, Party A should be able to modify and resubmit the amount. This loop continues until Party B agrees, leading to a "settled" stage. The response from Party B must be displayed on Party A’s interface, regardless of the choice made.

#### Requirements

Initial Submission: Allow Party A to submit an initial settlement amount.
Modification and Resubmission: Enable Party A to modify and resubmit the settlement amount any number of times until Party B responds.
Dispute and Agreement Handling: Allow Party B to dispute or agree to the submitted amount. If disputed, Party A can modify and resubmit the amount. The process repeats until agreement is reached.
Display Responses: Party A’s interface must display Party B’s current response (dispute or agreement), and Party B's interface should display the amount submitted by Party A (refreshing and real-time updates can be ignored in Part 1).
Settlement Completion: Once Party B agrees, the system should transition to a settled state.

### Part 2: Handling Modifications and Responses

#### Objective

Implement a mechanism to handle scenarios where Party A modifies the submitted settlement amount while Party B is reviewing it, vice versa. If Party B submits a response (objection or agreement) during Party A’s modification process, the system must explicitly prompt Party A to refresh the page to see the updated status when Party A tries to modify the amount. Ensure that Party A is aware of any such actions before they proceed with their modifications. After refreshing the page, Party A can resubmit the amount if there's an objection or enter the "settled" stage when Party B agrees with the amount. In the meantime, Party B can see the most recent amount submitted by Party A, which needs to be automatically refreshed.

#### Requirements

Develop a mechanism to detect if a response from Party B is made during the modification process by Party A upon Party A's submission. I.e., when Party A attempts to submit a modified amount, the system must check if Party B has made a response during the modification period.
Ensure that the interface of Party A does not automatically refresh the page or update the status without explicit action from Party A.
Implement a mechanism within the application that allows for automatic updates on Party B's interface whenever Party A makes changes. This should occur without any perceivable action required by Party B, such as manually refreshing the page.
No need to consider the scenario where Party A is editing the amount at the exact moment Party B submits their response, vice versa.

## Recommended Technologies

Frontend: React / Next.js, Typescript, Tailwind, ...
Backend (Optional): Node.js / Python (Fast API, Flask, ...)
Database (Optional): SQLite, ...
Technology Flexibility: Feel free to choose and use any technologies not listed above (e.g., Vite, pnpm, ...)
Guidelines
Flexibility for Front-end Developers: If you are a frontend engineer and are not familiar with backend mechanisms, feel free to use mock data to simulate the different cases. Lack of backend and database implementation will not be a reason for deduction in your evaluation.
Creative Freedom: For any aspects not mentioned in this document, you are free to improvise as long as you meet the requirements listed.
Use of Third-Party Packages: You are welcome to use any third-party packages that you find useful.
Choice of Technology: You can use any version of the programming languages and frameworks that you prefer.
Time Investment: You are expected to spend approximately 3-4 hours completing this task. We respect your time, so please do not feel obligated to work on it for longer than this.
Imperfection Acceptance: No piece of software is perfect. Feel free to document any additional functionality you would add or things you might do differently.
Submission Deadline: You have one day to complete your solution from the time you receive this document. If we do not receive your solution within one day and have not heard from you, we will assume you are no longer interested in the role. Please email info@leylinepro.com if you need more time.
Extra Time Utilization: If you find yourself with extra time, feel free to include tests or address any performance concerns.
