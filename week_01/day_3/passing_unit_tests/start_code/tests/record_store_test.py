import unittest
from src.record_store import *

class TestRecordStore(unittest.TestCase):

    def setUp(self):
        self.record1 = {
            "artist": 'The Beach Boys',
            "title": 'Pet Sounds',
            "genre": 'Pop',
            "price": 10
        }

        self.record2 = {
            "artist": 'Iron Maiden',
            "title": 'Powerslave',
            "genre": 'Heavy Metal',
            "price": 12
        }

        self.record3 = {
            "artist": 'Michael Jackson',
            "title": 'Thriller',
            "genre": 'Pop',
            "price": 8
        }

        self.record_store = {
            "name": "CodeClan Records",
            "money": 100,
            "records": [
                self.record1,
                self.record2,
                self.record3
            ]
        }

    @unittest.skip("delete this line to run the test")
    def test_get_name(self):
        result = get_name(self.record_store)
        self.assertEqual("CodeClan Records", result)

    @unittest.skip("delete this line to run the test")
    def test_find_record_by_title(self):
        result = find_record_by_title("Pet Sounds", self.record_store)
        self.assertEqual(self.record1, result)

    @unittest.skip("delete this line to run the test")
    def test_sell_record(self):
        sell_record(self.record3, self.record_store)

        money_result = self.record_store["money"]
        self.assertEqual(108, money_result)

        records_result = self.record_store["records"]
        self.assertEqual([self.record1, self.record2], records_result)
