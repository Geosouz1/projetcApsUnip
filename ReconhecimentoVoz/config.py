# coding: utf-8

import speech_recognition as sr
from gtts import gTTS
from playsound import playsound
import requests as re

#Funcao responsavel por falar 
def cria_audio(audio, resposta):
	tts = gTTS(audio,lang='pt-BR')
	#Salva o arquivo de audio
	tts.save('audios/'+resposta+'.mp3')
	print("Estou aprendendo o que voce disse...")
	#Da play ao audio
	playsound('audios/'+resposta+'.mp3')

def falar(fala):
	playsound('audios/'+fala+'.mp3');


#Funcao responsavel por ouvir e reconhecer a fala
def ouvir_microfone():
	#Habilita o microfone para ouvir o usuario
	microfone = sr.Recognizer()
	with sr.Microphone() as source:
		#Chama a funcao de reducao de ruido disponivel na speech_recognition
		microfone.adjust_for_ambient_noise(source)
		#Avisa ao usuario que esta pronto para ouvir
		print("Diga alguma coisa: ")
		#Armazena a informacao de audio na variavel
		audio = microfone.listen(source)


	try:
		#Passa o audio para o reconhecedor de padroes do speech_recognition
		frase = microfone.recognize_google(audio,language='pt-BR')
		#Apos alguns segundos, retorna a frase falada
		print("Voce disse: " + frase)
		#Caso nao tenha reconhecido o padrao de fala, exibe esta mensagem
	except sr.UnknownValueError:
		print("Nao entendi")

	return frase

def comunicaHttp(frase):
	r = re.get('http://localhost:3001/envia', params={'frase': frase})
	print(r)

while (1):
	frase=ouvir_microfone()
	if  frase== 'config':
		falar('config')
		falar('deseja_fazer')
		frase=ouvir_microfone()
		if  frase== 'adicionar resposta':
			falar('pergunta_usuario')
			escultar=ouvir_microfone()
			print(escultar)
			falar('resposta_para_usuario')
			fala=ouvir_microfone()
			print(fala)
			falar('animacao')
			animacao=ouvir_microfone()
			print (animacao)
			falar('entao')
			falar('confirmacao_parte1')
			cria_audio(escultar,'escultar')
			falar(confirmacao_parte2)
			cria_audio(fala,'fala')
		print(frase);
#cria_audio(frase,nome);

comunicaHttp(frase)
