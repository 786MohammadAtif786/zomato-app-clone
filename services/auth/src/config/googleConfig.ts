import {google} from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOLGE_CLIENT_SECRET = process.env.GOOLGE_CLIENT_SECRET;

export const oauth2client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOLGE_CLIENT_SECRET,
    "postmessage" 
)

