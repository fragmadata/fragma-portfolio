package com.fragmadata.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/**
 * Created by naveen on 12/7/17.
 */

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/bootstrap/**").permitAll()
                .antMatchers("/css/**").permitAll()
                .antMatchers("/fonts/**").permitAll()
                .antMatchers("/images/**").permitAll()
                .antMatchers("/js/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
                .logout()
                    .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .permitAll();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        /*BufferedReader br = new BufferedReader(new FileReader("Users.csv"));
        String line;
        while((line = br.readLine())!=null){
            String[] credentials = line.split(",");
            auth.inMemoryAuthentication() .withUser(credentials[0]).password(credentials[1]).roles("USER");
        }*/
        String[][] credentials = new String[][]{
                {"fragma_demo" , "fragma_demo"},
                {"fragma_user" , "fragma_user"}
        };

        for(int i=0;i<2;i++){
            auth.inMemoryAuthentication() .withUser(credentials[i][0]).password(credentials[i][1]).roles("USER");
        }
    }
}