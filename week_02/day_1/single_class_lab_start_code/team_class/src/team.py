class Team:
    points = 0

    def __init__(self, name, players, coach):
        self.name = name
        self.players = players
        self.coach = coach

    def add_player(self, player):
        self.players.append(player)

    def has_player(self, find_player):
        found = False
        for player in self.players:
            if player == find_player:
                found = True
        return found

    def play_game(self, result):
        if result:
            self.points += 3
