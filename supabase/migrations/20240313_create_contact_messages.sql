-- Create enum for message status
CREATE TYPE message_status AS ENUM ('pending', 'read', 'responded');

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT NOT NULL,
    message TEXT NOT NULL,
    status message_status DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    
    -- Add constraints with fixed regex patterns
    CONSTRAINT email_format CHECK (email ~ '^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT phone_format CHECK (phone ~ '^\+?[0-9 ()-]{8,}$')
); 