import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class RoomTest {
    Room room;

    @BeforeAll
    public void setup() {
        room = new Room(RoomType.DOUBLE);
    }

    @Test
    public void canGetRoomType() {
        assertEquals(RoomType.DOUBLE, room.getRoomType());
    }
}
