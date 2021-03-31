import unittest
from src.connection import Connector
import random
import string
from random import seed
from random import randint
import time



class DatabaseOperationsTests(unittest.TestCase):

    def test_player_signup(self):
        random.seed(time.perf_counter())
        conn = Connector()

        print("\nAdding Players:")

        for _ in range (10): #testing 10 random player input
            
            name="ptest"
            
            #generate random password
            letters = string.ascii_letters 
            passw=( ''.join(random.choice(letters) for i in range(10)) )

            value=randint(0,100000)#generating random numbers
            name=name+ str(value)#adding number behind name to get unique names

            email=name+'@ptest.de'
            
            print(name,email,passw)

            result=conn.add_player(name, email, passw)

            with self.subTest(True):
                self.assertTrue(result)

                #to check again manually

                data = conn.get_players()
                emails1 = data
                self.assertTrue(email in emails1)

        
     

    
    def test_instructor_signup(self):
        
        conn = Connector()
        random.seed(time.perf_counter())
                
        print("\nAdding Instructors:")


        for _ in range (10):#testing 10 random instructor input
            name="itest"
            
            #generate random password
            letters = string.ascii_letters 
            passw=( ''.join(random.choice(letters) for i in range(10)) )

            value=randint(0,100000)#generating random numbers
            name=name+ str(value)#adding number behind name to get unique names

            email=name+'@itest.de'

            print(name,email,passw)

            result=conn.add_instructor(name, email, passw)
                
            with self.subTest(True):
                self.assertTrue(result)

                #to check again manually
                data2=conn.get_instructors()
                emails2 = data2
                self.assertTrue(email in emails2)


if __name__ == '__main__':
    unittest.main()