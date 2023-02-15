from dataclasses import dataclass


@dataclass
class Artist:
    name: str
    id: int = None

    def __repr__(self):
        return f"Artist: {self.name}"
