import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestObserver {

    Publisher publisher;
    Subscriber subscriber1;
    Subscriber subscriber2;

    @BeforeEach
    public void setup() {
        publisher = new Publisher();
        subscriber1 = new Subscriber();
        subscriber2 = new Subscriber();
        publisher.subscribe(subscriber1);
        publisher.subscribe(subscriber2);
    }

    @Test
    public void publisherCanAddSubscriber() {
        assertEquals(2, publisher.getSubscriberCount());
    }

    @Test
    public void publisherCanRemoveSubscriber() {
        publisher.unsubscribe(subscriber1);
        assertEquals(1, publisher.getSubscriberCount());
    }


    @Test
    public void publisherCanNotifySubscribers() {

        Video newVideo = new Video();
        publisher.addVideo(newVideo);

        String expectedNotification = "Check out my new video! " + newVideo;
        assertEquals(expectedNotification, subscriber1.getNotification());
        assertEquals(expectedNotification, subscriber2.getNotification());
    }


}
