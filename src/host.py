class Host:
    def __init__(self, name="Howie Mandel"):
        self.name = name
        self.current_dialogue = ""

    def set_dialogue(self, dialogue):
        self.current_dialogue = dialogue

    def get_dialogue(self):
        return self.current_dialogue

    def greet_contestant(self, contestant):
        self.set_dialogue(f"Hello {contestant.name}, welcome to Deal or No Deal!")

    def present_cases(self):
        self.set_dialogue("Here are the cases. Choose wisely!")

    def reveal_case(self, case):
        self.set_dialogue(f"The case number {case.number} contains ${case.value}!")