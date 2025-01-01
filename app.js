const uploadForm = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://uikmsngbwhsgrmssgkoq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpa21zbmdid2hzZ3Jtc3Nna29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MTMzNjIsImV4cCI6MjA1MTI4OTM2Mn0.qLRkkqIL8aEVQ4zUO7nCk8hZufAyqnqUVMhpQ9sO_g0'';
const supabase = createClient(supabaseUrl, supabaseKey);

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const file = fileInput.files[0];
    if (!file) return;

    const { data, error } = await supabase.storage
        .from('your_bucket_name')
        .upload(`public/${file.name}`, file);

    if (error) {
        console.error('Error uploading file:', error);
        return;
    }

    displayFile(file.name);
});

async function displayFile(filename) {
    const { publicURL, error } = supabase.storage
        .from('your_bucket_name')
        .getPublicUrl(`public/${filename}`);

    if (error) {
        console.error('Error getting public URL:', error);
        return;
    }

    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.innerHTML = `
        <span>${filename}</span>
        <a href="${publicURL}" download>Download</a>
    `;

    fileList.appendChild(fileItem);
}