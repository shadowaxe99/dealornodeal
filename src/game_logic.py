```python
from contestant import Contestant
from host import Host
from case import Case

class GameState:
    def __init__(self):
        self.contestant = Contestant()
        self.host = Host("Howie Mandel")
        self.cases = [Case(i) for i in range(1, 27)]
        self.selected_cases = []
        self.remaining_cases = self.cases

    def start_game(self):
        self.host.say_welcome()
        self.contestant.choose_case(self.cases)

    def select_case(self, case_number):
        case = self.get_case(case_number)
        if case:
            self.selected_cases.append(case)
            self.remaining_cases.remove(case)
            self.host.reveal_case(case)

    def get_case(self, case_number):
        for case in self.cases:
            if case.number == case_number:
                return case
        return None

    def reveal_case(self, case):
        case.reveal()
        self.host.say_case_value(case)
        self.check_game_over()

    def check_game_over(self):
        if len(self.remaining_cases) == 1:
            self.host.say_game_over()
            self.contestant.reveal_final_case(self.remaining_cases[0])
```
