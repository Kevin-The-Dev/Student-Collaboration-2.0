const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const bodyParser = require('body-parser');
const cors = require('cors');

// OpenAI API Key setup
const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY'  // Replace with your OpenAI API Key
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/ask-ai', async (req, res) => {
  const { question } = req.body;
  
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',  // GPT model to use
      prompt: question,
      max_tokens: 150
    });
    res.json({ answer: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ error: 'Error connecting to AI' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
