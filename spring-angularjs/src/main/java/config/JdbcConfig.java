package config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

/**
 * Created by jimmylin on 2/20/16.
 */
@Configuration
@EnableAutoConfiguration
@ImportResource("classpath:/config/spring-mybatis-config.xml")
public class JdbcConfig {
}
