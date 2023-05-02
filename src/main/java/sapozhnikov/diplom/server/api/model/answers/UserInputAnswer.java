package sapozhnikov.diplom.server.api.model.answers;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public abstract class UserInputAnswer {
     protected String message;
     protected boolean action;
}
