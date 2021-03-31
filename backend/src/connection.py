import sqlite3

class Connector:
    """Manage Databse connection."""

    def __init__(self):
        self.conn = sqlite3.connect('beer_game.db', check_same_thread=False)

    def add_player(self, name, email, password):
        """Add player to Player table.

        Args:
            name (string): name of the user
            email (string): emailaddress of the user
            password (string): password
        """
        cur = self.conn.cursor()

        emails=self.get_players()
        
        if email not in emails:
            cur.execute(
                "INSERT INTO Player(player_name, player_email\
                , player_password) VALUES (?, ?, ?);",
                (name, email, password)
            )
        else:
            return False


        self.conn.commit()
        cur.close()
        return True

    def add_instructor(self, name, email, password):
        """Add Instructor to Instructor table.

        Args:
            name (string): name of the user
            email (string): emailaddress of the user
            password (string): password
        """
        cur = self.conn.cursor()
        
        emails=self.get_instructors()
        
        if email not in emails:
            cur.execute(
                "INSERT INTO Instructor(ins_name, ins_email\
                , ins_password) VALUES (?, ?, ?);",
                (name, email, password)
            )
        else:
            return False

        self.conn.commit()
        cur.close()
        return True

    def get_players(self):
        """Get players.

        Returns:
            player[]: list of players email
        """
        data=[]
        cur = self.conn.cursor()
        query="SELECT * FROM Player;"

        
        for row in cur.execute(query).fetchall():
            data.append(row[2])

        cur.close()
        return data

    def get_players_email_password(self):
        """Get players email, password

        Returns:
            [[email,password],..]
        """
        data=[]
        cur = self.conn.cursor()
        query="SELECT * FROM Player;"

        
        for row in cur.execute(query).fetchall():
            test=[]
            test.append(row[2])
            test.append(row[3])
            data.append(test)

        cur.close()
        return data

    def get_instructors(self):
        """Get instructors email

        Returns:
            data[]: list of instructors email
        """

        data=[]
        cur = self.conn.cursor()
        query="SELECT * FROM Instructor;"

        
        for row in cur.execute(query).fetchall():
            data.append(row[2])

        cur.close()
        return data

    def get_instructors_email_password(self):
        """Get instructorss email, password

        Returns:
            [[email,password],..]
        """

        data=[]
        cur = self.conn.cursor()
        query="SELECT * FROM Instructor;"

        
        for row in cur.execute(query).fetchall():
            test=[]
            test.append(row[2])
            test.append(row[3])
            data.append(test)

        cur.close()
        return data