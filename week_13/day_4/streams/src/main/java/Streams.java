import java.util.stream.IntStream;

public class Streams {

    static char getFirstLetter(String name) {
        return name.charAt(0);
    }

    public static void main(String[] args) {
//        List<String> myList = Arrays.asList("Alec", "Spock", "Zeke", "Norah-Rae", "Atticus");
//        myList.stream()
//                .map(Streams::getFirstLetter).forEach(System.out::println);


//        List<String> myList = Arrays.asList("Alec", "Spock", "Zeke", "Norah-Rae", "Atticus");
//        Stream.of("Alec", "Spock", "Zeke", "Norah-Rae", "Atticus")
//                .map(Streams::getFirstLetter).forEach(System.out::println);


//        int total = Stream.of(1,2,3,4,5,6,7)
//                .reduce(0, (sum, num) -> sum += num);
//        System.out.println(total);

//        Stream.of(1,2,3,4,5,6,7)
//                        .map(num -> num * 2).forEach(System.out::println);


//        Stream.of(1,2,3,4,5,6,7)
//                .filter(num  -> num % 2 == 0).forEach(System.out::println);


//        Stream.of(3,1,42, 5, 17, 27, 15, 101, 54, 28, 10)
//                .sorted().limit(4).forEach(System.out::println);


//        OptionalDouble average = Stream.of(3,1,42, 5, 17, 27, 15, 101, 54, 28, 10)
//                .mapToInt(n -> n)
//                .average();
//
//        System.out.println(average);


//        int result = Stream.of(3,1,42, 5, 17, 27, 15, 101, 54, 28, 10)
//                .mapToInt(n -> n).max().getAsInt();
//
//        System.out.println(result);


        int output = IntStream.of(3, 1, 42, 5, 17, 27, 15, 101, 54, 28, 10)
                .peek(n -> System.out.printf("original: %d%n", n))
                .map(n -> n * 10)
                .peek(n -> System.out.printf("multiplied: %d%n", n))
                .filter(n -> n % 4 == 0)
                .peek(n -> System.out.printf("filtered: %d%n", n))
                .sum();


        System.out.println(output);

    }
}
