import Link from "next/link";

import { createClient } from '@supabase/supabase-js';
import {useEffect, useState} from "react";

const supabaseUrl = 'https://xxxyvwaulefyjqqmqted.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eHl2d2F1bGVmeWpxcW1xdGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5Mzg1OTEsImV4cCI6MjAwMDUxNDU5MX0.onKW25D46LxYuHbByfem6TFwQF_H2Y2uT4SsJVogdfo';

const supabase = createClient(supabaseUrl, supabaseKey)


export default function Posts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the 'todos' table
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('posts')
                    .select('*');

                if (error) {
                    throw error;
                }

                setData(data);
            } catch (error) {
                console.log('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.text}</li>
                ))}
            </ul>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
        )
}
