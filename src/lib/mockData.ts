export const mockFiles = [
  { id: '1', name: 'Q4_Financial_Report.pdf', type: 'pdf', size: '2.3 MB', date: '2025-10-15', insights: 3 },
  { id: '2', name: 'Project_Alpha_Proposal.docx', type: 'word', size: '1.1 MB', date: '2025-10-12', insights: 5 },
  { id: '3', name: 'Marketing_Campaign_Slides.pptx', type: 'ppt', size: '5.8 MB', date: '2025-10-10', insights: 2 },
  { id: '4', name: 'Sales_Data_Q4.xlsx', type: 'excel', size: '850 KB', date: '2025-10-14', insights: 8 },
  { id: '5', name: 'Client_Contract_Signed.png', type: 'image', size: '450 KB', date: '2025-10-11', insights: 1 },
];

export const mockInsights = [
  { id: '1', title: 'Key Financial Highlights', description: 'Revenue increased by 15% YoY, but net profit margin decreased by 2%.', type: 'summary', fileId: '1' },
  { id: '2', title: 'Risk Identified: Market Competition', description: 'The proposal does not sufficiently address the competitive landscape.', type: 'risk', fileId: '2' },
  { id: '3', title: 'Recommendation: Clarify Budget', description: 'Provide a more detailed breakdown of the marketing budget.', type: 'recommendation', fileId: '3' },
  { id: '4', title: 'Extracted Data: Top 5 Sales Reps', description: 'Data extracted showing top performing sales representatives for Q4.', type: 'data', fileId: '4' },
];