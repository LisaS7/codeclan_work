def get_name(person):
  return person["name"]


def get_favourite_tv_show(person):
  return person["favourites"]["tv_show"]


def likes_to_eat(person, food):
  return food in person["favourites"]["snacks"]


  # in longer form:

  # if food in person["favourites"]["snacks"]:
  #   return True
  # return False


  # in even longer form:

  # for snack in person["favourites"]["snacks"]:
  #   if snack == food:
  #     return True
  
  # return False


def add_friend(person, new_friend):
  person["friends"].append(new_friend)
  

def remove_friend(person, old_friend):
  person["friends"].remove(old_friend)


def total_money(people):
  total_money = 0
  for person in people:
    total_money += person["monies"]
  
  return total_money


def lend_money(lender, lendee, amount):
  lender["monies"] -= amount
  lendee["monies"] += amount


def all_favourite_foods(people):
  favourite_foods = []
  for person in people:
    for snack in person["favourites"]["snacks"]:
      favourite_foods.append(snack)
    
  
  return favourite_foods


# Simpler version:
# def all_favourite_foods(people):
#   favourite_foods = []
#   for person in people:
#     favourite_foods.extend(person["favourites"]["snacks"])
  
#   return favourite_foods


def find_no_friends(people):
  no_mates = []
  for person in people:
    if len(person["friends"]) == 0:
      no_mates.append(person)

    # OR

    # if not person["friends"]:
    #   no_mates.append(person)
    
  return no_mates


def unique_favourite_tv_shows(people):
  unique_tv_shows = []
  for person in people:
    if person["favourites"]["tv_show"] not in unique_tv_shows:
        unique_tv_shows.append(person["favourites"]["tv_show"])
    
  return unique_tv_shows


# BONUS

# def unique_favourite_tv_shows(people):
#   all_tv_shows = []
#   for person in people:
#     all_tv_shows.append(person["favourites"]["tv_show"])

#   return set(all_tv_shows)