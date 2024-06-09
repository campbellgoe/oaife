
// @ts-nocheck
"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Trends from '@/components/Trends'
export default function Home() {
  const [trend, setTrend] = useState('')
  return (
    <><Trends onSelectTrend={trend => {
      setTrend(trend)  
    }}/><ChatGPTComponent trend={trend} /></>
  );
}



const ChatGPTComponent = ({ trend }) => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
      setSubmitting(false)
    }, [response])
    useEffect(() => {
      if(trend){
        setPrompt('Tell me the latest about '+trend)
      }
    }, [trend])

    const handleSubmit = async (e) => {
      setSubmitting(true)
        e.preventDefault();
        setPrompt("")
        try {
          console.log('requesting query....')
            const result = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL+'/api/chatgpt', { prompt });
            console.log('result:', result)
            setResponse(result.data.message.toString() || 'No response.');
            
        } catch (error) {
            console.error('Error querying ChatGPT:', error);
            setResponse('error check console')
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                className="text-black"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows="4"
                    cols="50"
                    placeholder="Enter your prompt here"
                />
                <button type="submit" {...(submitting ? { disabled: true } : {})}>Submit</button>
            </form>
            {submitting && <p>Loading response...</p>}
            {response && (
                <div>
                    <h3>Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};
