import sqlite3

conn = sqlite3.connect('beer_game.db', check_same_thread=False)

cur = conn.cursor()

def show_players():
    query=cur.execute("SELECT * FROM Player;")

    for row in query.fetchall():
        print(row)
    
    return 


def show_instructors():
    query=cur.execute("SELECT * FROM Instructor;")

    for row in query.fetchall():
        print(row)
    
    return 





def main():
    print("\n\nData of Player Table:")
    show_players()

    print("\n\nData of Instructor Table:")
    show_instructors()

main()

cur.close()