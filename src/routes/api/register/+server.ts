import type {RequestHandler} from './$types';
import {error, json} from '@sveltejs/kit';
import {gradeList} from "$lib/gradeList";
import { env } from '$env/dynamic/private';


const TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = env.TELEGRAM_CHAT_ID;


/** @type {RequestHandler} */
export const POST: RequestHandler = async ({request}) => {
    // Parse the incoming data
    const formData = await request.json();

    // extract these from the request body
    // phone
    // email - gmail
    // name
    // message

    const grade = gradeList.find(el => el.value === formData.grade);
    // Construct the message to be sent to the Telegram channel
    const message = [
        `#New_Registration`,
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Grade: ${grade.name}`,
    ].join('\n');

    // Send the message using Telegram Bot API
    try {
        const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message
            })
        });

        const telegramData = await telegramResponse.json();

        if (!telegramResponse.ok || !telegramData.ok) {
            throw new Error('Failed to send message via Telegram');
        }

        // Return a success response
        return json({success: true});

    } catch (err) {
        // If there's an error, return a server error response
        return error(500, `Error sending message: ${err.message}`);
    }
};