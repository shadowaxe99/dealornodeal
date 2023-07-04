class Contestant:
    def __init__(self, name):
        self.name = name
        self.score = 0
        self.selected_cases = []

    def select_case(self, case):
        self.selected_cases.append(case)

    def get_score(self):
        return self.score

    def update_score(self, value):
        self.score += value

    def get_name(self):
        return self.name

    def get_selected_cases(self):
        return self.selected_cases