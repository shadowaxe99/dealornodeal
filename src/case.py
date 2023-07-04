class Case:
    def __init__(self, case_number, case_value):
        self.case_number = case_number
        self.case_value = case_value
        self.is_open = False

    def open_case(self):
        self.is_open = True

    def get_case_value(self):
        return self.case_value

    def get_case_number(self):
        return self.case_number

    def is_case_open(self):
        return self.is_open