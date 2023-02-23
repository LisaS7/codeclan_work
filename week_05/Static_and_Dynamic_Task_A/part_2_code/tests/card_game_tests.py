import unittest
from src.card import Card
from src.card_game import CardGame


class TestCardGame(unittest.TestCase):
    def setUp(self):
        self.game = CardGame()
        self.card_h4 = Card("Hearts", 4)
        self.card_d4 = Card("Diamonds", 4)
        self.card_s1 = Card("Spades", 1)

    def test_check_for_ace__true(self):
        result = self.game.check_for_ace(self.card_s1)
        self.assertTrue(result)

    def test_check_for_ace__False(self):
        result = self.game.check_for_ace(self.card_h4)
        self.assertFalse(result)

    def test_highest_card__card1(self):
        expected = self.card_h4
        actual = self.game.highest_card(self.card_h4, self.card_s1)
        self.assertEqual(expected, actual)

    def test_highest_card__card2(self):
        expected = self.card_h4
        actual = self.game.highest_card(self.card_s1, self.card_h4)
        self.assertEqual(expected, actual)

    def test_highest_card__equal(self):
        expected = "Equal"
        actual = self.game.highest_card(self.card_d4, self.card_h4)
        self.assertEqual(expected, actual)

    def test_cards_total(self):
        cards = [self.card_s1, self.card_d4, self.card_h4]
        expected = "You have a total of 9"
        actual = self.game.cards_total(cards)
        self.assertEqual(expected, actual)
