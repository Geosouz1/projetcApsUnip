#-*- coding: utf-8 -*-

#importando os módulos do chatbox
from chatterbot.trainers import ListTrainer
from chatterbot import ChatBot

import os

import speech_recognition as sr

bot = ChatBot('aps')

bot.set_trainer(ListTrainer) #definir treinamento

for _file in os.listdir('chats'): # percorre todos os arquivos em chats
    lines = open('chats/' +_file, 'r').readlines() # vamos ler linhas

    bot.train(lines)
"""
r = sr.Recognizer()

with sr.Microphone() as s:
    r.adjust_for_ambient_noise(s)

    while True:
        audio = r.listen(s)

        speech = r.recognize_google(audio, language='pt')

        print('Voce disse: ', speech)

        """
