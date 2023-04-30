package sapozhnikov.diplom.server.errros;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class RegisterException extends Exception {
    private String text;

    @Override
    public String toString() {
        return this.text;
    }
}
