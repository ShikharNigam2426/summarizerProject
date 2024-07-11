import React, { useState } from 'react';
import styled from 'styled-components';
import Api from '../API/GeminiApi';
import axios from 'axios';

const Input = () => {
  const [InputText, setInputText] = useState('');
  const [generatedResponse, setgeneratedResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = Api.apiUrl;
  const apiKey = Api.apiKey;

  const SearchGemini = async () => {
    const searchContent = 'Give me a small summary of this text and dont give any heading: ' + InputText;
    const requestData = {
      contents: [
        {
          parts: [
            {
              text: searchContent
            }
          ]
        }
      ]
    };
    setIsLoading(true);

    try {
      const response = await axios({
        method: 'post',
        url: apiUrl + apiKey,
        data: requestData,
      });
      setgeneratedResponse(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <textarea className="form-control text" aria-label="With textarea" placeholder='Enter the text' value={InputText} onChange={(e) => { setInputText(e.target.value) }}></textarea>
      <button className={`btn btn-${isLoading ? 'secondary' : 'primary'} my-5 ${isLoading ? 'disabled' : ''}`} disabled={isLoading} onClick={SearchGemini}>{isLoading ? 'Summarizing...' : 'Summarize'}</button>
      <Output><p>{generatedResponse}</p></Output>
    </Container>
  );
};

const Output = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  height: 250px !important;
  background-color: #97949475 !important;
  color: white !important;
  overflow-x: hidden !important;

  @media screen and (max-width: 600px) {
    height: 26vh !important;
    overflow-y: scroll !important;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  padding-bottom: 100px;

  .text{
    height: 250px !important;
    background-color: #97949475 !important;
    color: white !important;
  }

  .text::placeholder{
    color: #ffffff8a !important;
  }

  @media screen and (max-width: 600px) {
    .text{
      height: 26vh !important;
    }
  }
`;

export default Input;
