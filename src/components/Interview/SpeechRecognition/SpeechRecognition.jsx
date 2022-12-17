import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BiMicrophone } from 'react-icons/bi';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function SR() {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])

    useEffect(() => {
        handleListen()
    }, [isListening])

    const handleListen = () => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }

    const handleSaveNote = () => {
        // API Call
        // https://08bd-2405-201-2010-5080-55f6-3a9a-7e2-eea.in.ngrok.io
        let body = {
            key: "73627",
            questionID: 1,
            email: "ashutosh@sample.com",
            timeDuration: "5",
            text: "lorem ipsum like like lorem ipsum"
        };
        axios.post("https://08bd-2405-201-2010-5080-55f6-3a9a-7e2-eea.in.ngrok.io/api/doTextAnalysis", body, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(data => console.log(data.data));

    }
    return (
        <>
            <div className="container">
                <div className="box">
                    <button onClick={() => setIsListening(prevState => !prevState)}>
                        Start/Stop
                    </button>
                    <p>{note}</p>
                </div>
                <div className="box">
                    <button onClick={handleSaveNote} >
                        Submit Audio
                    </button>
                </div>
            </div>
        </>
    )
}

export default SR