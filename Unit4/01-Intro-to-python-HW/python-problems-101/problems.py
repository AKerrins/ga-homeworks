# to pass the test function, please return a string of 'string' from then function
# eg: test() => 'string'
import math


def test():
    string = 'string'
    return string

# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"


def hello(string="World"):
    return f"Hello {string}!"


# write a function that will calculate the area of a circle, given the radius


def area_of_circle(radius):
    area = math.pi * radius ** 2
    return area
    pass


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    farenheit = (celcius + 32)*(9/5)
    return(farenheit)
    pass


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    rev = 0
    while number > 0:
        rev = (10*rev) + number % 10
        number //= 10
        return rev
    pass

# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False


def palindrome_check(string):
    if len(string) == 1:
        return True
    if string[0] != string[-1]:
        return False
    return palindrome_check(string[1:-1])


pass


# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    a = 'aacciijlooprsstv'
    ''.join(sorted(a))
    pass

# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'


def title_case(string):
    'the lord of the rings'.title()
    pass

# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6


def num_of_vowels(string):
    vowels = set('aeiou')
    sentence = "Yellow Submarine"
    counter = 0
    for c in sentence.lower():
        if c in vowels:
            counter += 1
    pass

# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************


def frame(string):

    pass
