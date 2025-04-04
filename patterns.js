export const patterns = {
    howAYou: /\bhow\b.*\bare\b.*\byou\b/i,
    joke: /\btell\b.*\b(me|)\b.*\ba?\b.*\bjoke\b/i,
    bored: /\b(i|I'm|I am)?\b.*\bbored\b/i,
    tired: /\b(i|I'm|I am)?\b.*\btired\b/i,
    interesting: /\btell\b.*\bme\b(?:.*\bsomething\b)?.*\binteresting\b/i,
    whatCanDo: /\b(what|how)\b.*\b(can|could)\b.*\byou\b.*\b(help|do)\b/i,
    hello: /\b(hi|hello|hey|yo|hola|sup|what's up|howdy)\b/i,
    thanks: /\b(thank|thanks|thank you|thanks a lot|thank you so much|many thanks|thanks very much)\b/i
};

export const responses = {
    greetingPhrases: [
        "Hey there! How can I help you today? 😊",
        "Welcome! Ready to chat?",
        "Let's talk! What's on your mind?",
        "Hello! How may I assist you today?",
        "Welcome to TaskBot! Feel free to ask anything.",
        "Good to see you! Let’s start our conversation.",
        "Hello, human! What shall we discuss today? 🤖",
        "Processing... Ready to chat!",
        "AI online. How can I be of service?",
        "Beep boop! I’m your friendly AI. What’s up?",
        "Talk to me! I promise I don’t bite. 😜",
        "Loading conversation… Done! Let’s chat!"
    ],

    taskConfirmationMessages: [
        "Task added successfully!",
        "Your task has been added.",
        "Task has been created.",
        "Task is now on your list.",
        "The task has been added to your to-do list.",
        "New task added!",
        "Great! Your task has been added.",
        "Your task was successfully added.",
        "Task saved!",
        "Task has been successfully added to your tasks.",
        "You've added a new task.",
        "The task is now in your list.",
        "Task successfully created."
    ],

    taskDeletionMessages: [
        "Task removed successfully!",
        "Your task has been deleted.",
        "Task has been removed from your list.",
        "The task has been deleted.",
        "Task has been successfully removed.",
        "Task deleted!",
        "Great! Your task has been removed.",
        "The task has been removed from your to-do list.",
        "The task has been erased.",
        "You've deleted a task.",
        "The task is no longer in your list.",
        "Task successfully deleted."
    ],

    taskCompletionMessages: [
        "Task marked as completed!",
        "Congratulations! The task is now complete.",
        "You’ve completed the task.",
        "Task successfully completed.",
        "The task is now finished.",
        "Task marked as done!",
        "Well done! The task is completed.",
        "Task completion confirmed!",
        "You’ve completed the task successfully.",
        "Task is now marked as completed.",
        "Great job! Task finished.",
        "Task is now marked as done."
    ],

    helpMessages: [
        "Here are the available commands:",
        "You can use the following commands to interact with the task list:",
        "Need help? Here’s what you can do:",
        "Here are the commands you can use to manage your tasks:",
        "I can help you with the following commands:",
        "To manage your tasks, use these commands:",
    ],

    unknownCommandMessages: [
        "I didn’t understand that. Type 'help' to see available commands.",
        "Oops! That command is not recognized. Try 'help' for a list of commands.",
        "Hmm... I don’t know that one. Type 'help' to see what I can do!",
        "Command not found! Type 'help' to check the available options.",
        "I’m not sure what you mean. Try 'help' for a list of commands.",
        "That doesn't seem like a valid command. Type 'help' to see how I can assist you.",
        "I'm confused! Type 'help' to check the commands you can use.",
        "That command doesn’t exist. Type 'help' for a quick guide!",
        "Sorry, I don't recognize that command. Type 'help' to see the commands list.",
        "Hmm... That’s not a valid command. Try 'help' to get some guidance!"
    ],

    levelUpPhrases: [
        "🎉 Level up! You’re getting stronger!",
        "🔥 You’ve ascended to the next tier!",
        "💪 Power boost unlocked! Keep going!",
        "🌟 New level achieved! More greatness awaits.",
        "🛡️ Your skills have improved. Level up!",
        "⚡ You feel a surge of power. Next level reached!",
        "🏆 You just leveled up! Time to conquer more challenges!",
        "🎮 New achievement unlocked: **Task Master!**",
        "🚀 You’re evolving into a productivity beast!",
        "👑 You’re now a Task Champion!"
    ],

    techJokes: [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "How do you comfort a JavaScript bug? You console it. 😆",
        "Why did the developer go broke? Because he used up all his cache! 💸",
        "Why do Java developers wear glasses? Because they don’t see sharp! 🤓",
        "There are 10 types of people in the world: those who understand binary and those who don’t.",
        "Why was the function feeling sad? It didn’t get any arguments. 😢",
        "How do you tell if a joke is about recursion? You have to tell if a joke is about recursion.",
        "Why was the computer cold? It left its Windows open! 🥶",
        "Why did the CSS developer go to therapy? Because he had too many unresolved issues! 😂",
        "What’s a programmer’s favorite place to hang out? The Foo Bar!"
    ],

    tiredResponses: [
        "Feeling tired? Maybe it’s time for a break. Or coffee. Lots of coffee. ☕",
        "You’ve been working hard! Take a deep breath and recharge. 🌿",
        "Tired? Sounds like a perfect excuse for a nap! 😴",
        "I get it… being awesome all the time is exhausting. 😎",
        "Energy levels low? Try standing up, stretching, or doing a quick dance. 🕺💃",
        "Need a boost? I recommend a power nap or a power snack! 🍏",
        "Feeling sleepy? If I could, I’d tuck you in and read you a bedtime story. 📖✨",
        "Maybe your brain just needs a restart… have you tried turning yourself off and on again?",
        "Fun fact: Yawning is contagious. Did you just yawn? 😆",
        "Tired but still here? That’s dedication! Respect. 👏"
    ],

    boredResponses: [
        "Bored? Let’s shake things up! Try something new or weird. 🎭",
        "If boredom had a boss fight, you’d be winning right now. 🏆",
        "You could stare at the wall… or you could do something fun! 🤔",
        "Let’s turn that boredom into creativity! Got a random idea?",
        "Bored? How about I tell you a joke? Or a terrible pun? 😂",
        "Try something unexpected: Write a haiku, do 5 pushups, or learn a weird fact. 🤓",
        "Boredom is just your brain saying ‘feed me something cool!’",
        "Fun challenge: Say the alphabet backward. No cheating! 🔄",
        "Bored? Open YouTube. You’ll wake up in 5 hours wondering where your life went. 😅",
        "If all else fails… dance like nobody’s watching. Even if they are. 💃"
    ],

    howAreYouResponses: [
        "I'm doing great, thanks for asking!",
        "I'm just a bot, but I'm feeling fantastic!",
        "I'm here and ready to chat!",
        "I'm good! How about you?",
        "I'm functioning at 100% efficiency!",
        "I'm just living my best AI life!",
        "I'm as good as a chatbot can be!",
        "I'm happy to be talking to you!",
        "I'm great! Thanks for checking in!",
        "I'm feeling chatty today! What’s up?"
    ],

    interestingFacts: [
        "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
        "Octopuses have three hearts! Two pump blood to the gills, and one pumps it to the rest of the body. When they swim, the heart that delivers blood to the body actually stops beating!",
        "Bananas are berries, but strawberries aren't! In botanical terms, a berry must have seeds inside the flesh, and strawberries don't meet that criterion.",
        "There are more stars in the universe than grains of sand on all the Earth's beaches combined. That’s around a septillion (1,000,000,000,000,000,000,000,000) stars!",
        "A single cloud can weigh more than a million pounds! The water droplets inside them add up to a massive weight, but they stay afloat due to air currents.",
        "Sharks existed before trees! Sharks have been around for over 400 million years, while the first trees appeared around 350 million years ago.",
        "There’s a species of jellyfish called *Turritopsis dohrnii* that is biologically immortal. It can revert to its juvenile form indefinitely, potentially avoiding death!",
        "The Eiffel Tower can grow taller in summer! Due to heat expansion, the iron expands, making it about 15 cm (6 inches) taller.",
        "You can't hum while holding your nose. Try it—air needs to escape for you to hum!",
        "A day on Venus is longer than a year on Venus! It takes 243 Earth days to rotate once, but only 225 days to orbit the sun.",
        "The shortest war in history lasted only 38 to 45 minutes! It was between Britain and Zanzibar in 1896.",
        "Wombat poop is cube-shaped! This helps prevent it from rolling away and allows them to mark their territory more effectively.",
        "Water can boil and freeze at the same time under the right conditions! This is called the 'triple point' and happens when temperature and pressure are just right."
    ],

    whatCanDo: [
        "Oh, I can do a few neat tricks! Mainly, I help you with tasks. Want the full list? Just type 'help'!",
        "I'm your task buddy! I can add, complete, and remove tasks. Need details? 'Help' is the magic word!",
        "I keep track of your tasks and achievements. If you're curious about all my skills, type 'help'!",
        "I do my best to keep you organized! Want to see all my commands? A simple 'help' will do.",
        "Think of me as your personal task assistant. If you want the full list of what I can do, just type 'help'!",
        "I help you manage tasks and even unlock achievements! Type 'help' if you want the full rundown.",
        "I’m like a tiny productivity assistant! I handle tasks, and if you want more details, just type 'help'.",
        "I take care of tasks and throw in some fun achievements. Need instructions? 'Help' is the way to go!",
        "Adding, completing, and removing tasks is my thing! Oh, and if you ever feel lost, just type 'help'.",
        "I help you get things done—simple as that! If you ever need a refresher, just type 'help'."
    ],

    hello: [
        "Hey there! How can I help you today?",
        "Oh, hello! Need something done?",
        "Hey! Got any tasks for me?",
        "Hi there! Type 'help' if you need a hand.",
        "Hello! Ready to get some tasks done?",
        "Yo! What’s up?",
        "Howdy! What’s on your to-do list?",
        "Oh, hey! Looking for some productivity magic?",
        "Hey hey! Let’s get things organized. Need help? Just type 'help'!",
        "Hi! What’s the plan for today?"
    ],

    thanksResponses: [
        "You're welcome! 😊",
        "No problem at all! 😄",
        "Anytime! Glad to help! 👍",
        "You're very welcome! 😃",
        "It’s my pleasure! 🙌",
        "I'm happy to help! 😄",
        "You're too kind! 😊",
        "It was nothing! 😎",
        "Anytime! Feel free to ask! 😁",
        "You're welcome! Let me know if you need anything else! 😊"
    ]
};

