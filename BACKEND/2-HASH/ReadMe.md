# Hashing: Securing passwords using Salting and Hashing

## Objectives - what are we going to learn today?

- An overview of how we can protect data []
- Encoding, Encryption, Hashing []
- What is Hashing? []
- Why Hashing? []
- What is salting? []
- How does salting work? []

## Protecting Data in a database
Q: What is a way for us to protect our data?
A: 
- Data can be breached
- Employees can see sensitive information about clients etc.
- 



Q: Why would it be important to store confidential information in a 'cryptic' way?
A: - to make data as anonymous as possible so hackers cannot decypher or decrypt sensitive information (think SSN, passport numbers, etc).

## Encoding
- Encoding maps out your characters to other characters. It is a 1-1 relationship.

Examples of encoding:
Hexidecimal values -> RGB values

Encode colors to Hexidecimal values -> 
Hexidecimal values is a base 16 system (0-9A-F) used to simplify how binary is represented

Binary is a base 2 (0 and 1) and is used to write digital data such as computer processor instructions used every day computing purposes.

A -> Encode -> 1A= <br>
B -> Encode -> 2B=

** Encoding is not the safest way to protect data because it is easily decoded **

** Encoding is mostly used for sending over email attachments **
** To convert data so the format is smaller (compressing) **

## Encryption
- Encryption is when you take a cipher(a rule) to mix up data and if you use the same cipher, you can di-cipher the information. (Caesarian Cipher)

- A classic example is the Caesarian Cipher where you rotate the alphabet n amount of times to the left or to the right.

- you're limited to the amount of letters in the alphabet [anabel]
- You can calculate the rotations [bri]
- If you have access to the cipher, you can decrypt your information (not safe)!

## Hashing

- the most secure way to protect data

### How does hashing work

- First it takes plain text -> pass the plain text into a hashing algorithm -> hashed string that always returns the same amount of values regardless of the length of the original plain text.

- Popular Hashing Algorithms 

1. MD5 - Message Digest - Mainly used for hashing passwords, CCN, and other information that is mainly stored in SQL databases. 

    -In order for a hashing algorithm to be safe, the hashing function needs to hit two requirements:
        1. The hashed function should not return the same hashed string from a different plain text. 
            plain text: 'ThisIsMyPassword' -> hAsh_123
            plain text2: 'SomeThing_Else' -> hAsh_123
                - Collisions are bad

2. SHA - Secure Hash Algorithm
- Less collision occurances
- The hashing algorithm needs to increase randomness with the returned hashed string.
- the higher the number next to SHA, the more secure the hashing algorithm.
        

** If you are interested in fully understanding some of the gaps from hashing (collisions), consider practicing hash tables and investigae when your hash function creates a collision. Think about how that can be a vulnerability when it comes to securing data. **


### From user input to database
- Let's first investigate the sequencing of how a user password input get's stored in a database and how it gets verified when a user logs into their account.

User
- req.body {
    username: 'user123',
    password: 'my_Password'
}

endpoint - POST
- in our post endpoint, within the body, this is where we will apply our hashing function

- we store the hashed string into the database NOT the plain text.


- If the user is logging in:
    - When the user tries to log in, they will input their username + password
    - the user password gets hashed 
    - then a comparison is made with the stored hashed string
    - if its a match -> the user is verified


- consider this situation:
user1: {username: 'user1', password: 'pW123'} <br>
user2: {username: 'user2', password: 'pW123'}

** The two users are going to produce the same hashed string for their passwords ** <- not safe

** Ideally, you always want sensitive information to be stored as random and unique as possible **

## Salting 

- Salting is an extra preliminary step prior to hashing plaintext into our hashing function. Salting is ideally used in situations where two or more users may have identical sensitive information(think same password)

Salt sequence:

-user1
- plain text (ex: pW123)-> salting plain text pW123$5rt -> hashing function (pW123$5rt) -> hashed string 

-user2
- plain text (ex: pW123)-> salting plain text pW123^&* -> hashing function (pW123^&*) -> hashed string



### Crypto -> hashing

### Bcrypt -> hashing algorithm + salting

