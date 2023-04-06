# System Design Exercise: Floober Taxi App
![Floober Logo](./images/logo.png "Floober Logo")

## Brief
We are designing an Uber-like system (Floober) through which users of the mobile app can request a nearby taxi and drivers can respond to requests etc.

## Task
Draw a system design diagram to model the Floober (Uber-like) Taxi app.

## Stage One: What Components Might We Need?
We thought about the components that might be needed in our system, which you folks suggested were:
- The mobile (front-end) app for both drivers and customers
- An API
- A database
- Geolocation/Payment services

## Stage Two: Initial System Design Diagram
We drew an initial system design diagram but all agreed this was too simplistic (see next page) and would result in a monolothic architecture for such a large-scale enterprise application. Read more about the monolithic architecture design pattern and why it's not great [here](https://microservices.io/patterns/monolithic.html).
![Floober Design v1](./images/Floober%20System%20Design%20v1.png "Floober Design v1")

## Stage Three: Enhanced System Design Diagram
We discussed some of the problems with the initial design and came up with an enhanced design (see key to diagram below it) which involved adopting a microservices architecture to separate the concerns within our system. Read more about the microservices architecture design pattern and its pros/cons [here](https://microservices.io/patterns/microservices.html):
![Floober Design v2](./images/Floober%20System%20Design%20v2.png "Floober Design v2")

### Key To Diagram

#### 1. Firewall (Inbound)
The incoming Firewall can help protect the Floober system from any malicious or suspicious incoming network requests. We can configure rules which result in blocking any such requests from reaching the internal (trusted) network. A simple explanation of firewalls and some common types can be found [here](https://www.cisco.com/c/en_uk/products/security/firewalls/what-is-a-firewall.html).

#### 2. Network Load Balancer
When the network is under heavy load (e.g. there is a high volume of network traffic due to increased use of the Floober app) the load balancer can scale up (add more) or scale down (remove) compute node instances to handle the increased workload. Whilst the compute nodes are scaled up, the load balancer can distribute the incoming network requests to the compute node which is least in demand. Read more about load balancing [here](https://www.digitalocean.com/community/tutorials/what-is-load-balancing).

#### 3. Compute Nodes
These provide all the required memory, CPU, storage etc on which a virtual machine can run a service (or services) intended to carry out a particular task - in this case processing the incoming network requests and pushing appropriate messages into queue(s) in the message broker for onward transmission. During periods of high network load, the compute nodes can be horizontally scaled (scaled out) by the load balancer (e.g. more instances of the same virtual machine can be added) to help cope with the increased demand, and scaled down (removed or shutdown) when things quieten down. We can also use vertical scaling (scaling up) to increase the resources (memory, CPU etc) available to the compute nodes already running. Read [here](https://cloudcheckr.com/cloud-automation/horizontal-vertical-cloud-scaling/) for more information on scaling of cloud resources.

#### 4. Message Broker/Message Queues
The message broker service supports our compute notes publishing (or pushing) messages into one or more message queues - each queue represents a different ‘topic’ depending on the structure and content of the messages within it. Downstream services and components can then ‘subscribe’ to these message queues in order to read the messages as they arrive. Message broker is actually based on an ‘enterprise integration pattern’ (read about the Message Broker design pattern [here](https://www.enterpriseintegrationpatterns.com/MessageBroker.html) and enterprise integration patterns [here](https://en.wikipedia.org/wiki/Enterprise_Integration_Patterns)) for decoupling the sender and recipient of a message but maintaining centralized control over the messages.

Some common message brokers include:
- ActiveMQ
- RabbitMQ
- Google Pub/Sub
- Apache Kafka (in particular for data streaming)
- Amazon Simple Queue Service

#### 5. Application Load Balancer 
Similar to the network load balancer, the application load balancer responds to the volume of messages in the message broker queues - if there is a high volume of messages, the load balancer can scale up more virtual machines running the downstream services (payments, bookings etc) to respond to the load, and scale down when things are quieter.

#### 6. Virtual Machines
A virtual machine emulates a physical machine (memory, CPU, network, operating system etc.) on which we can run our different services but runs as an isolated set of processes on a physical machine, so multiple virtual machines can execute simultaneously on one physical machine. This means that our system can run a minimal number of virtual machines to satisfy the current demand, scaling up or out as required similar to the compute nodes mentioned earlier. Read more about Virtual Machines (VMs) including their uses and benefits [here](https://azure.microsoft.com/en-gb/resources/cloud-computing-dictionary/what-is-a-virtual-machine).

#### 7. In-memory Cache
The in-memory cache can be used to improve performance of database requests involving data that has already been read (remember, disk operations are more expensive in terms of time performance) by serving the data from the in-memory cache rather than having to read it from the database. See [here](https://aws.amazon.com/caching) for more information.

Some common cache frameworks include:
- Memcached
- Redis
- Couchbase
- Apache Ignite

#### 8. Database
We spoke about having a replica database for storing a backup of the production database which will give us some redundancy protecting against loss of data - if the data centre that houses the production database is affected e.g. by a power cut, we can switch our system to use the backup database. In a cloud based system, it is common to configure this backup database to be in a different region so there is a reduced possibility of both the production and backup databases being impacted. Read more about database replication [here](https://redis.com/blog/what-is-data-replication/).

Databases may be relational such as MySQL, PostgreSQL and SQL Server or NoSQL databases such as MongoDB or DynamoDB. They could also be distributed databases (those which support storing their data across multiple physical locations) such as Apache Cassandra and Citus.

#### 9. Firewall (Outgoing)
It is common practice to also monitor and control outbound network traffic from our system - imagine a scenario where a malicious request did reach the trusted part of our system’s network and was attempting to access unauthorized data or execute malicious code with a view to returning something to the user. Our outbound firewall can monitor, detect and block the outbound traffic.

## Things We Didn’t Cover That We Could Have Included
- Authentication and security - we might have included an authentication service to verify users of the system
- 'Push' mechanism for notifications between mobile devices and the system - e.g. when we want to notify the user's mobile app of driver updates. Read an interesting system design interview exercise involving a notification service [here](https://medium.com/double-pointer/system-design-interview-notification-service-86cb5c266218).

## Final Thoughts

The enhanced diagram is by no means perfect and could be further enhanced but as an initial high level diagram hopefully gets you thinking about the bigger picture. In reality, the system design for a system of this scale would probably be much more vast so we'd have a high-level diagram which loosely groups together key areas of the system and then a series of additional diagrams which drill down into the detail of each area.

We talked about how we could improve the fault-tolerance of our system by:
- Protecting against malicious attacks which could cause our system to fail e.g. Distribute Denial of Service (DDoS) using a firewall
- Backing up our data to secondary storage through replication so we don't lose critical data
- Use scaling of Virtual Machines to spin up new instances of services when one fails in order to continue service

We talked about how we could improve the performance of our system by:
- Using a load balancer to distribute incoming network requests evenly amongst available compute nodes/VMs and scaling up/down as required to increase throughput in order to avoid bottlenecks
- Using an in-memory cache to improve data-read performance by avoiding more expensive disk-read operations
- Using the message broker pattern to organise and distribute messages to only interested services as required

## Links
The links used above can also be found below.
- Monolithic architecture pattern: https://microservices.io/patterns/monolithic.html
- Microservices architecture pattern: https://microservices.io/patterns/microservices.html
- Firewalls: https://www.cisco.com/c/en_uk/products/security/firewalls/what-is-a-firewall.html
- Load Balancing: https://www.digitalocean.com/community/tutorials/what-is-load-balancing
- Scaling in the cloud: https://cloudcheckr.com/cloud-automation/horizontal-vertical-cloud-scaling
- Message Broker pattern: https://www.enterpriseintegrationpatterns.com/MessageBroker.html
- Enterprise Integration Patterns: https://en.wikipedia.org/wiki/Enterprise_Integration_Patterns
- What are Virtual Machines: https://azure.microsoft.com/en-gb/resources/cloud-computing-dictionary/what-is-a-virtual-machine
- Caching: https://aws.amazon.com/caching
- Database Replication: https://redis.com/blog/what-is-data-replication
- System Design Interview - Notification Service: https://medium.com/double-pointer/system-design-interview-notification-service-86cb5c266218