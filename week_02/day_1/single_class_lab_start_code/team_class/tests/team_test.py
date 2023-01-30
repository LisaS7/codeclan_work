import unittest
from src.team import Team


class TestTeam(unittest.TestCase):
    def setUp(self):
        players = ["Derice Bannock", "Sanka Coffie", "Junior Bevil", "Yul Brenner"]
        self.team = Team("Cool Runnings", players, "Irv Blitzer")

    def test_team_has_name(self):
        self.assertEqual("Cool Runnings", self.team.name)

    def test_team_has_players(self):
        self.assertEqual(4, len(self.team.players))

    def test_team_has_coach(self):
        self.assertEqual("Irv Blitzer", self.team.coach)

    def test_coach_can_be_changed(self):
        self.team.coach = "John Candy"
        self.assertEqual("John Candy", self.team.coach)

    def test_can_add_new_player_to_team(self):
        new_player = "Jeff"
        self.team.add_player(new_player)
        self.assertEqual(5, len(self.team.players))

    def test_check_player_in_team__found(self):
        self.assertEqual(True, self.team.has_player("Junior Bevil"))

    def test_check_player_in_team__not_found(self):
        self.assertEqual(False, self.team.has_player("Usain Bolt"))

    #   Extensions
    #   Hint You do not need to add 'points' as a parameter in your '__init__' function inside your 'Team' class. You can still add it as a class properties.
    def test_team_has_points(self):
        self.assertEqual(0, self.team.points)

    def test_play_game__win(self):
        self.team.play_game(True)
        self.assertEqual(3, self.team.points)

    def test_play_game__lose(self):
        self.team.play_game(False)
        self.assertEqual(0, self.team.points)
