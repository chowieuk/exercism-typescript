export function hey(message: string): string {
    const alphabetRegex = new RegExp("[A-Za-z]");
    message = message.trim();
    if (message === "") {
        return answers["nothing"];
    } else if (
        message.toUpperCase() === message &&
        alphabetRegex.test(message)
    ) {
        return message.slice(-1) === "?"
            ? answers["yelledQuestion"]
            : answers["yell"];
    } else if (message.slice(-1) === "?") {
        return answers["question"];
    } else {
        return answers["else"];
    }
}

const answers = {
    question: "Sure.",
    yell: "Whoa, chill out!",
    yelledQuestion: "Calm down, I know what I'm doing!",
    nothing: "Fine. Be that way!",
    else: "Whatever.",
};

// Instructions
// Bob is a lackadaisical teenager. In conversation, his responses are very limited.

// Bob answers 'Sure.' if you ask him a question, such as "How are you?".

// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.
