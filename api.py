from flask import Flask,jsonify,request,render_template
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from pymongo import MongoClient
from flask_cors import CORS
# from langchain.chains import ConversationChain
# from langchain_openai import OpenAI
import os
from duckduckgo_search import DDGS
# from langchain.chains import LLMChain
# from langchain.prompts import PromptTemplate
from g4f.client import Client
import g4f
import re
import json
import requests
from urllib.parse import quote as url_quote

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'tushar_jindal'  # Change this to a secure random key
CORS(app, origins=['http://localhost:5173'], methods=['GET', 'POST'], 
     allow_headers=['Content-Type', 'Authorization'])


jwt = JWTManager(app)
MONGO_URI = "mongodb+srv://TJ31312:31312@cluster0.0eio4vb.mongodb.net/?retryWrites=true&w=majority"
# MONGO_URI = "mongodb://localhost:27017"
client1 = MongoClient(MONGO_URI)
db = client1["flask_users"]
collection = db["users"]

client = Client()

# os.environ['OPENAI_API_KEY'] = openai_key
# llm = OpenAI(temperature=0.5)
# convo = ConversationChain(llm=llm)

# Define global variables to store patient information
patient_info = {}
diagnosis_info = {}
conversations = {}
diagnosis_convo = {}
yoga_info = {}
yoga_convo = {}

@app.route('/api/user/signup',methods=['POST'])
def signup():
    data = request.json
    username = data.get('username', None)
    password = data.get('password', None)
    deta = {
        "username": username,
        "password": password
    }
    document = collection.find_one({"username":username,"password":password})
    if document==None:
        collection.insert_one(deta)
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"failure":"already Present go to login"})
    # return jsonify({"Success": "Data Entered Successfully"})


@app.route('/api/user/login',methods=['POST'])
def login():
    data = request.json
    username = data.get('username', None)
    password = data.get('password', None)

    if collection.find_one({"username":username,"password":password})==None:
        return jsonify({'message': 'Invalid username or password'}), 401
    else:
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200

# Protected endpoint that requires authentication
@app.route('/api/protected', methods=['GET'])
@jwt_required()
def protected():
    return render_template('hello.html')

@app.route('/api/process_input', methods=['POST'])
def process_input():
    global patient_info

    # Get input text from request
    input_text = request.json.get('input_text')

    # If patient information is not collected yet, collect it
    if not patient_info:
        # Extract patient information from the first request
        patient_info = request.json.get('patient_info')

        # Ensure all required information is provided
        if not all(key in patient_info for key in ['name', 'age', 'gender', 'description']):
            return jsonify({'error': 'Incomplete patient information'}), 400

        # Generate initial prompt using patient information
        initial_prompt = f"Please ignore all previous prompts. You are a famous CBT psychologist Dr. Robertson conducting the first session with your patient {patient_info['name']}, who is a {patient_info['age']} year old {patient_info['gender']}. {patient_info['name']} is feeling {patient_info['description']}. Don’t skip anything. And from now on reply to {patient_info['name']} as like you are their psychologist or a therapist and be supportive and helpful to them. Start from here by asking them more about how they're feeling and why to know more about their issue so you could help them. Do not generate the whole converasation at once. Just generate the next response."

        try:
            # Process the initial prompt
            # output = convo.run(initial_prompt)
            output = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": initial_prompt}])
            conversations[initial_prompt] = output
            return jsonify({'output': output}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500

    else:
        # Process input through convo.run()
        try:
            # output = convo.run(input_text)
            if conversations:
                output = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content":  f"History of the conversation, previous conversation: {conversations}; New user input, give response to this user input and refer to previous history as well for context: {input_text}"}])
            else:
                output = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": input_text}])
            conversations[input_text] = output
            return jsonify({'output': output}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500

@app.route('/api/yoga', methods=['POST'])
def yoga_input():
    global yoga_info

    # Get input text from request
    input_text = request.json.get('input_text')
    
    # asana = request.json.get('asana')
    
    
    # If patient information is not collected yet, collect it
    # if not yoga_info:
    # Extract patient information from the first request
    # yoga_info = request.json.get('yoga_info')

    # # Ensure all required information is provided
    # if not all(key in yoga_info for key in ['name', 'age', 'gender', 'description']):
    #     return jsonify({'error': 'Incomplete patient information'}), 400
    # ####
    
    output1 = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": str(input_text)+". This is the issue that the person is facing, suggest them the name of yoga which would help them. Strictly give only one word output and that one word should be the name of the yoga."}])
    
    print(output1)
    
    results = DDGS().images(
    keywords=str(output1)+" yoga images",
    region="wt-wt",
    safesearch="off",
    size=None,
    color=None,
    type_image=None,
    layout=None,
    license_image=None,
    max_results=5,
    )
    
    image_links = []
    
    # Loop through the list of dictionaries
    for item in results:
        # Get the image link from the 'image' key
        image_link = item['image']
        # Append the image link to the list
        image_links.append(image_link)
    
    
    # Generate initial prompt using patient information
    initial_prompt = f"Please ignore all previous prompts. You are a yoga instructor. The person is feeling {input_text}. Suggest them yoga to help with their issue. Give the yoga name and the benefit of the suggested yoga. Give the output in English. And Strictly only suggest the yoga names and how to to them in points; there shouldn't be any extra text other than what is asked. Dont give the output in markdown format, give the output in normal text without any markdown formatting. Start your reply from the next line and be on topic, do not add any starting text or any kind of extra text. Give in total 5 such yogas. It should give the output in this format:- 1. title: description\n2. title: description\n3. title: description\n4. title: description\n5. title: description\n"
    
    
    # output = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": initial_prompt}])
    
    
    try:
        # Process the initial prompt
        # output = convo.run(initial_prompt)
        output = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": initial_prompt}])
        lines = output.split("\n")
        output_list = [item for item in lines if item.strip()]
        # yoga_convo[initial_prompt] = output
        return jsonify({'output': output_list, 'images': image_links}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    else:
        # Process input through convo.run()
        try:
            # output = convo.run(input_text)
            if yoga_convo:
                output = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content":  f"History of the conversation, previous conversation: {yoga_convo}; New user input, give response to this user input and refer to previous history as well for context: {input_text}"}])
            else:
                output = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": input_text}])
            yoga_convo[input_text] = output
            return jsonify({'output': output, 'images': image_links}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500

# @app.route('/api/diagnosis', methods=['POST'])
# def diagnosis_input():
#     global diagnosis_info
    
#     url = 'http://localhost:11434/api/generate'
    
#     # Get input text from request
#     input_text = request.json.get('input_text')

#     # If patient information is not collected yet, collect it

#         # Generate initial prompt using patient information
#         #initial_prompt = f"Please ignore all previous prompts. You are a virtual assistant doctor who is expected to help people figure out and diagnose what issue they might be facing based on their symptoms and how they are feeling. You can ask for more and additional information from the user to know more about the health issue they are facing. You conducting the first session with your patient {diagnosis_info['name']}, who is a {diagnosis_info['age']} year old {diagnosis_info['gender']}. {diagnosis_info['name']} is feeling {diagnosis_info['description']}. Don’t skip anything. And from now on reply to {diagnosis_info['name']} like you are their doctor be helpful to them. Start from here by asking them more about how they're feeling, and what issue they are having and why to know more about their issue so you could help them and try to diagnose them and offer them remedies accordingly. Do not generate the whole converasation at once. Just generate the next response."
    
#     appended_prompt = ". Give a small and concise message reply suggesting some medications for it. Do not add anything else in reply except the medication. Now generate the response and recommend me the name of the medicines to help relieve, also a small description of it but keep it concise. "
#     prompt = input_text + appended_prompt
    
#     payload = {
#     "model": "dolphin-phi",
#     "prompt": prompt,
#     "stream": False
#     }
    
#     headers = {'Content-Type': 'application/json'}
    
#     response1 = requests.post(url, data=json.dumps(payload), headers=headers)

#     final_out = response1.json()["response"]
    
#         # Process the initial prompt
#         # output = convo.run(initial_prompt)
#         # output = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": initial_prompt}])
#     try:
#         diagnosis_convo[input_text] = final_out
#         return jsonify({'output': final_out}), 200
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

@app.route('/api/diagnosis', methods=['POST'])
def diagnosis_input():
    url = 'http://localhost:11434/api/generate'
    
    # Get input text from request
    input_text = request.json.get('input_text')

    # template = f"{input_text} identify the medical issue and make a prompt like i am suffering from it or i am having it"
    # chat_completion = client.chat.completions.create(model="gpt-3.5-turbo",
    # input_text = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": template}])

    negative_prompt = (
        "Avoid giving general information or unrelated advice. "
        "Do not suggest non-medical treatments. "
        "Do not provide responses unrelated to healthcare. "
    )

    appended_prompt = (
        "I am suffering from this issue. Provide a concise diagnosis and suggest appropriate medications. "
        "Highlight the names of the medications. "
        "Response should be in English and healthcare-related only. "
        "Also include a brief description of the condition."
    )
    
    prompt = input_text + appended_prompt + negative_prompt    
    
    payload = {
        "model": "dolphin-phi",
        "prompt": prompt,
        "stream": False
    }
    
    headers = {'Content-Type': 'application/json'}
    
    response = requests.post(url, data=json.dumps(payload), headers=headers)
    
    if response.status_code != 200:
        return jsonify({'error': 'External API request failed'}), 500
    
    response_json = response.json()
    final_output = response_json.get('response')
    
    # Check if the response is healthcare-related
    # if "health assistant, sorry" in final_output.lower():
    #     return jsonify({'output': 'The input is not healthcare-related.'}), 200
    
    template = f"{final_output} make the names of medicines in it as bold."
    # chat_completion = client.chat.completions.create(model="gpt-3.5-turbo",
    response1 = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": template}])

    # Return the healthcare-related response
    try:
        return jsonify({'output': response1}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    # # Process input through convo.run()
    
    #     # output = convo.run(input_text)
    #     if diagnosis_convo:
    #         output = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content":  f"History of the conversation, previous conversation: {conversations}; New user input, give response to this user input and refer to previous history as well for context: {input_text}"}])
    #     else:
    #         output = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": input_text}])
    #     diagnosis_convo[input_text] = output
    #     return jsonify({'output': output}), 200
    # except Exception as e:
    #     return jsonify({'error': str(e)}), 500

@app.route('/api/image_links', methods=['POST'])
def image_links():
    asana = request.json.get('asana')
    results = DDGS().images(
    keywords=asana,
    region="wt-wt",
    safesearch="off",
    size=None,
    color=None,
    type_image=None,
    layout=None,
    license_image=None,
    max_results=5,
    )

    image_links = []

    # Loop through the list of dictionaries
    for item in results:
        # Get the image link from the 'image' key
        image_link = item['image']
        # Append the image link to the list
        image_links.append(image_link)

    # Print the list of image links
    return jsonify({"iamge_links":image_links})


@app.route('/api/mood_todo',methods=['POST'])
def mood_todo():
    # Extract mood and date from the incoming request
    mood = request.json.get('mood')
    
    template = f"My mood is {mood}. Generate a worklist with just proper title and description and nothing else in order to make the mood better, in each line first write the title of the worklist then its description, both seperated by a colon ':', in total generate 8 such worklists with title and their description. The text should be outputted in plate text format instead of markdown. Start your reply from the next line and be on topic, do not add any starting text or any kind of extra text. It should give the output in this format:- 1. title: description\n2. title: description\n3. title: description\n4. title: description\n5. title: description\n6. title: description\n7. title: description\n8. title: description\n"
    # chat_completion = client.chat.completions.create(model="gpt-3.5-turbo",
    response = g4f.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": template}])

    
    lines = response.split("\n")
    print(lines)

    routine_dict = {}

    for line in lines:
        title, description = line.split(": ")
        routine_dict[title] = description

    print(routine_dict)

    # for completion in chat_completion:
    #     outlist.append(completion.choices[0].delta.content)

    # full_string = ""

    # for i in outlist:
    #     if i is not None:
    #         full_string += str(i) + " "
    
    
    # Split the input string into lines and filter out empty lines
    # full_string = full_string.split("\n")


    return jsonify({"output": routine_dict})
    

if __name__ == '__main__':
    app.run(debug=True)
