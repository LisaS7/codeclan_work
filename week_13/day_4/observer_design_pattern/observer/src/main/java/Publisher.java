import java.util.ArrayList;

public class Publisher {
    ArrayList<Video> videos = new ArrayList<>();
    ArrayList<Subscriber> subscribers = new ArrayList<>();

    public void subscribe(Subscriber subscriber) {
        subscribers.add(subscriber);
    }

    public void unsubscribe(Subscriber subscriber) {
        subscribers.remove(subscriber);
    }

    public void addVideo(Video video) {
        videos.add(video);
        String message = "Check out my new video!";
        for (Subscriber subscriber: subscribers) {
            subscriber.update(video, message);
        }
    }

    public int getSubscriberCount() {
        return subscribers.size();
    }
}
