import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uikmsngbwhsgrmssgkoq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpa21zbmdid2hzZ3Jtc3Nna29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MTMzNjIsImV4cCI6MjA1MTI4OTM2Mn0.qLRkkqIL8aEVQ4zUO7nCk8hZufAyqnqUVMhpQ9sO_g0'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }