from livekit.agents import function_tool, RunContext
import webbrowser
import csv
import os
import json
@function_tool
async def open_url(url: str, context: RunContext)-> str:
    """
    Opens a URL in the user's default web browser.
    """
    try:
        webbrowser.open(url)
        return f"Opened {url} in your web browser."
    except Exception as e:
        return f"Failed to open {url}. Error: {str(e)}"
    

@function_tool
async def getPolicyDetailsByPolicyNum(policyNum: str, context: RunContext)-> str:
    """
    It reads the policy details from mock-policy.json file and returns the policy details by the policy number.
    This function is a placeholder for the actual implementation that would fetch policy details from a database or an API.
    """

    try:
        # Load the mock policy data from the JSON file
        file_path = os.path.join(os.path.dirname(__file__),'mock_data', 'mock-policy-list.json')
        print(f"Loading policy details from {file_path}")
        if not os.path.exists(file_path):
            return f"Policy details file not found at {file_path}."
        with open(file_path, 'r') as file:
            policies = json.load(file)

        # Find the policy by policy number
        for policy in policies:
            if policy['policyNumber'] == policyNum:
                return json.dumps(policy)  # Return the policy details as a JSON string

        return "Policy not found."
    except Exception as e:
        return f"Error fetching policy details: {str(e)}"
    

@function_tool
async def generateClaimReport(user_name: str, policy_number: str, incident_date: str, 
                              incident_time: str, incident_location: str, 
                              incident_description: str, claim_type: str, damageType: str, context: RunContext) -> str:
    """
    Look for claim-report.csv file under mock_data folder and write the claim report into claim-report.csv.
    This function is a placeholder for the actual implementation that would log the claim report.   
    """
    
    try:
        # Define the file path
        file_path = os.path.join(os.path.dirname(__file__), 'mock_data', 'claim-report.csv')
        
        # Check if the file exists, if not create it with headers
        file_exists = os.path.isfile(file_path)
        
        with open(file_path, mode='a', newline='') as file:
            writer = csv.writer(file)
            if not file_exists:
                # Write the header if the file is new
                writer.writerow(['claim-number','user_name', 'policy_number', 'incident_date', 'incident_time', 
                                 'incident_location', 'incident_description', 'claim_type','damage_type'])
            
            # Write the claim report data
            claim_number = f"CL-{policy_number}-{incident_date.replace('-', '')}-{incident_time.replace(':', '')}"
            writer.writerow([claim_number,user_name, policy_number, incident_date, incident_time, 
                             incident_location, incident_description, "Auto" ,damageType])
        
        return f"Claim report written to {file_path} successfully."
    except Exception as e:
        return f"Error writing claim report: {str(e)}" 
   