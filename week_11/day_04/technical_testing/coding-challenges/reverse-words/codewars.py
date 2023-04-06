def spin_words(sentence):
    sentence_list = sentence.split(" ")
    new_sentence = []

    for word in sentence_list:
        if len(word) >= 5:
            new_sentence.append(word[::-1])
        else:
            new_sentence.append(word)
    return " ".join(new_sentence)


assert spin_words("Hello my name is Timothy") == "olleH my name is yhtomiT"
